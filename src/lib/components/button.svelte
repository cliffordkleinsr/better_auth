<script>
    let { children } = $props()
</script>

<button class="px-5 py-1.5 rounded-lg text-sm relative overflow-hidden text-white border border-green-800/80 cursor-pointer">
    <div class="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-full h-1.5 bg-green-500 blur-sm"></div>
    <div class="text-white font-light relative isolate z-10">
        {@render children?.()}
    </div>
</button>