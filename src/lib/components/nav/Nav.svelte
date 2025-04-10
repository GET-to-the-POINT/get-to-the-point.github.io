<script lang="ts">
	import { HouseIcon } from '@lucide/svelte';
</script>

<header class="p-4 flex items-center justify-between sticky left-0 right-0 top-0 z-50 border-b py-4 bg-background/80 backdrop-blur-sm shadow-sm">
	<h1>
		<a href="/">
			GET to the POINT
		</a>
	</h1>

	<nav>
		<ul class="flex items-center gap-4">
			<li>
				<a href="/" variant="ghost">
					<HouseIcon class="inline-block mr-2 h-4 w-4" />
					Home
				</a>
			</li>
			<li>
				<a href="/contact" variant="ghost">Contact</a>
			</li>
		</ul>
	</nav>
</header>