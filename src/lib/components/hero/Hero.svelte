<script lang="ts">
	import { fade } from "svelte/transition";
</script>

<section id="hero" class="relative overflow-hidden bg-muted py-20">
	<div in:fade class="container relative z-20 flex flex-col items-center gap-4 text-center">
		<h1 class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Meet Our Amazing Team</h1>
		<p class="max-w-[600px] text-muted-foreground">We're a diverse group of passionate individuals working together to create amazing experiences. Get to know the faces behind our success.</p>
	</div>
</section>
