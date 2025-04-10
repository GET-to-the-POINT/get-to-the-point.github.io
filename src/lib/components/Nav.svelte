<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { HouseIcon, MenuIcon } from "lucide-svelte";

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
		"h-20 bg-background": !isScrolled,
		"h-16 bg-background/80 backdrop-blur-sm shadow-sm": isScrolled,
	}}
>
	<nav class="container flex items-center justify-between">
		<a href="/" class="flex items-center gap-2 font-semibold">
			<img
				src="$assets/ui-dark-logo.png"
				alt="Logo"
				class={{
					"transition-all duration-300": true,
					"h-10 w-10": !isScrolled,
					"h-8 w-8": isScrolled,
				}}
			/>
			<span
				class={{
					"transition-all duration-300": true,
					"text-xl": !isScrolled,
					"text-lg": isScrolled,
				}}
			>
				Team Portal
			</span>
		</a>

		<div class="flex items-center gap-4">
			<div class="hidden items-center gap-6 md:flex">
				<Button variant="ghost">
					<HouseIcon class="mr-2 h-4 w-4" />
					Home
				</Button>
				<Button variant="ghost">About</Button>
				<Button variant="ghost">Team</Button>
				<Button variant="ghost">Contact</Button>
			</div>
			<Button variant="outline" size="icon" class="md:hidden">
				<MenuIcon class="h-4 w-4" />
			</Button>
		</div>
	</nav>
</header>

<!-- Add spacing to prevent content from hiding under fixed header -->
<div
	class={{
		"transition-all duration-300": true,
		"h-20": !isScrolled,
		"h-16": isScrolled,
	}}
/>
