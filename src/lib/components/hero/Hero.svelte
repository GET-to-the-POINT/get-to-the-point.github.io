<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<section id="hero" class="bg-muted relative overflow-hidden py-20">
	<div in:fade class="relative z-20 container flex flex-col items-center gap-4 text-center">
		<h1 class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
			Meet Our Amazing Team
		</h1>
		<p class="text-muted-foreground max-w-[600px]">
			We're a diverse group of passionate individuals working together to create amazing
			experiences. Get to know the faces behind our success.
		</p>
	</div>
</section>
