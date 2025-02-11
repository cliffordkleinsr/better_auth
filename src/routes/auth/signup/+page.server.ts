import { auth } from '$lib/server/auth';
import { authClient } from '$lib/server/auth-client';
import type { Actions, PageServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';

export const load = (async ({ request }) => {
	const session = await auth.api.getSession({
		headers: request.headers
	});
	return {
		props: {
			session
		}
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ request }) => {
        type RequestData = {
            name: string;
            email: string;
            password: string;
            confirm_password: string 
        }
        const entries = Object.fromEntries(await request.formData()) as RequestData
        const { email, name, password,  confirm_password } = entries
        if (password !== confirm_password) {
            throw new Error("Passwords must match")
        }
        const { data, error } = await authClient.signUp.email({
            email, // user email address
            password, // user password -> min 8 characters by default
            name, // user display name
            callbackURL: "/dashboard" // a url to redirect to after the user verifies their email (optional)
        }, {
            onRequest: (ctx) => {
                //show loading
            },
            onSuccess: (ctx) => {
                //redirect to the dashboard or sign in page
                redirect(303, "/auth/signin")
            },
            onError: (ctx) => {
                // display the error message
                throw new Error(ctx.error.message)
            },
    });
    }
};
