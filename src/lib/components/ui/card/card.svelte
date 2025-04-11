<script>
	import { cn } from "$lib/utils.js";

	let { as="div", ref = $bindable(null), class: className, children, ...restProps } = $props();
</script>

<svelte:element
	this={as}
	bind:this={ref}
	class={cn("bg-card text-card-foreground rounded-lg border shadow-sm", className)}
	{...restProps}
>
	{@render children?.()}
</svelte:element>
