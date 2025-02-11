import { auth } from '$lib/server/auth';
import { authClient } from '$lib/server/auth-client';
import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async ({ request }) => {
        type LoginData = {
            email: string;
            password: string
        }
        const entries = Object.fromEntries(await request.formData()) as LoginData
        const { email, password } = entries
       
        const response = await auth.api.signInEmail({
            body: {
                email,
                password
            },
            asResponse: true // returns a response object instead of data
        });

        if (response.ok) {
            redirect(303, "/dashboard")
        }
    }
};