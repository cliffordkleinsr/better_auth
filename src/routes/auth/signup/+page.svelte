<script lang="ts">
	import Button from '$lib/components/button.svelte';
	import Input from '$lib/components/Input.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<form action="" method="post" class="mx-auto grid max-w-md gap-2 py-5 shadow-lg">
	<div class="grid gap-2">
		<label for="name">Name</label>
		<Input name="name" />

		<label for="email">Email</label>
		<Input type="email" name="email" />

		<label for="email">password</label>
		<Input type="password" name="password" />
		<label for="email">confirm password</label>
		<Input type="password" name="confirm_password" />
		<Button>Sign Up</Button>
	</div>
</form>
