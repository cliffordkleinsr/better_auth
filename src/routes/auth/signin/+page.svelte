<script lang="ts">
	import Button from '$lib/components/button.svelte';
	import Input from '$lib/components/Input.svelte';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<form method="post" class="grid gap-2 mx-auto py-5 max-w-md">
    <label for="email">email</label>
    <Input type="email" name="email" />
    <label for="password">password</label>
    <Input type="password" name="password"/>
    <Button>
        Login
    </Button>
</form>