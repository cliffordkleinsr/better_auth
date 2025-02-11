import { BETTER_AUTH_URL } from '$env/static/private';
import { createAuthClient } from 'better-auth/svelte';
export const authClient = createAuthClient({
	baseURL: BETTER_AUTH_URL // the base url of your auth server
});
