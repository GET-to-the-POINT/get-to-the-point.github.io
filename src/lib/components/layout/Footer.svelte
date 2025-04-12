<script lang="ts">
	const year = new Date().getFullYear();

	let { ref = $bindable(null) } = $props();
</script>

<footer bind:this={ref} class="backdrop-blur sticky bottom-0 border-t border-b py-2 px-4">
	<p class="text-sm text-right">© {year} GET to the POINT. All rights reserved.</p>
</footer>
