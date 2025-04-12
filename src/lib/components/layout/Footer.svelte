<script lang="ts">
	const year = new Date().getFullYear();

	let { ref = $bindable(null) } = $props();
</script>

<footer bind:this={ref} class="sticky bottom-0 border-t border-b px-4 py-2 backdrop-blur">
	<p class="text-right text-sm">© {year} GET to the POINT. All rights reserved.</p>
</footer>
