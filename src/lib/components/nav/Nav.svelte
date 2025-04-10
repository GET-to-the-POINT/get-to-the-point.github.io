<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { HouseIcon, MenuIcon } from "@lucide/svelte";

	// Track scroll position
	let isScrolled = $state(false);

	// Update header on scroll
	const handleScroll = () => {
		isScrolled = window.scrollY > 50;
	};

	// Add scroll listener
	$effect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});
</script>

<header
	class={{
		"fixed left-0 right-0 top-0 z-50 flex items-center border-b transition-all duration-300": true,
		"h-16 bg-background/80 backdrop-blur-sm shadow-sm": true,
	}}
>
	<nav class="m-auto container flex items-center justify-between">
		<a href="/" class="flex items-center gap-2 font-semibold">
			<span
				class={{
					"transition-all duration-300": true,
					"text-xl": !isScrolled,
					"text-lg": isScrolled,
				}}
			>
				GET to the POINT
			</span>
		</a>

		<div class="flex items-center gap-4">
			<div class="hidden items-center gap-6 md:flex">
				<a href="/" variant="ghost">
					<HouseIcon class="inline-block mr-2 h-4 w-4" />
					Home
				</a>
				<a href="/contact" variant="ghost">Contact</a>
			</div>
			<Button variant="outline" size="icon" class="md:hidden">
				<MenuIcon class="h-4 w-4" />
			</Button>
		</div>
	</nav>
</header>