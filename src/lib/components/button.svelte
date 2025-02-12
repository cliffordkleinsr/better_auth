<script>
	let { children } = $props();
</script>

<button
	class="relative cursor-pointer overflow-hidden rounded-lg border border-green-800/80 px-5 py-1.5 text-sm text-white"
>
	<div
		class="absolute -bottom-2.5 left-1/2 h-1.5 w-full -translate-x-1/2 bg-green-500 blur-sm"
	></div>
	<div class="relative isolate z-10 font-light text-white">
		{@render children?.()}
	</div>
</button>
