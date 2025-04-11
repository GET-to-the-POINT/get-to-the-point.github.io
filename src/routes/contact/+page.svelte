<script>
	import { sineInOut } from 'svelte/easing';
	import { draw, blur } from 'svelte/transition';
</script>
<section class="items-center justify-center py-16 px-8">
	<h2 class="text-4xl font-bold">Contact Us</h2>
	<div class="text-center content-center min-h-2xl">
			<svg class="mx-auto lucide lucide-hard-hat-icon lucide-hard-hat" fill="none" height="24" stroke="currentColor"
					 stroke-linecap="round"
					 stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
					 style="width: 10rem; height: 10rem;"
					 xmlns="http://www.w3.org/2000/svg">
				<path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" in:draw={{ duration: 2000, easing: sineInOut }} />
				<path d="M14 6a6 6 0 0 1 6 6v3" in:draw={{ duration: 2000, easing: sineInOut }} />
				<path d="M4 15v-3a6 6 0 0 1 6-6" in:draw={{ duration: 2000, easing: sineInOut }} />
				<rect height="4" in:draw={{ duration: 2000, easing: sineInOut }} rx="1" width="20" x="2" y="15" />
			</svg>
			<svg class="mx-auto lucide lucide-construction-icon lucide-construction" fill="none" height="24" stroke="currentColor" stroke-linecap="round"
					 stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
					 style="width: 10rem; height: 10rem;"
					 xmlns="http://www.w3.org/2000/svg">
				<rect height="8" rx="1" width="20" x="2" y="6" in:draw={{ duration: 2000, easing: sineInOut }} />
				<path d="M17 14v7" in:draw={{ duration: 2000, easing: sineInOut }} />
				<path d="M7 14v7" in:draw={{ duration: 2000, easing: sineInOut }} />
				<path d="M17 3v3" in:draw={{ duration: 2000, easing: sineInOut }} />
				<path d="M7 3v3" in:draw={{ duration: 2000, easing: sineInOut }} />
				<path d="M10 14 2.3 6.3" in:draw={{ duration: 2000, easing: sineInOut }} />
				<path d="m14 6 7.7 7.7" in:draw={{ duration: 2000, easing: sineInOut }} />
				<path d="m8 6 8 8" in:draw={{ duration: 2000, easing: sineInOut }} />
			</svg>
		<p class="mt-4 text-5xl" in:blur={{duration: 2000}}>준비중입니다.</p>
	</div>
</section>