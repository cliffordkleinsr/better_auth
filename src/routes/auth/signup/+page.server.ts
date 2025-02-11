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
        const res = await auth.api.signUpEmail({
            body: {
                email,
                password,
                name,
            },
            asResponse: true // returns a response object instead of data
        })
        
        if (res.ok) {
            redirect(303, "/auth/signin")
        }
    }
};
