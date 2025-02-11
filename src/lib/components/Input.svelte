<script>
    let { name, type="text", placeholder="This is placeholder" } = $props()
</script>

<input
	{type}
	class="block w-full rounded-lg border-gray-100 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50  dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
	{name}
    {placeholder}
/>
