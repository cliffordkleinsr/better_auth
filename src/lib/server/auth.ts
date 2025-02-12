import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from './db'; // your drizzle instance
import * as schema from './db/schema';
import sendEmail from './email';

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: 'pg', // or "mysql", "sqlite",
		schema
	}),
	emailAndPassword: {
		enabled: true
	},
	emailVerification: {
		sendOnSignUp: true,
		sendVerificationEmail: async ({ user, url, token }, request) => {
			await sendEmail(
				user.email,
				'Verify your email address',
				`Click the link to verify your email: ${url}`
			);
		},
		autoSignInAfterVerification: true
	}
});
