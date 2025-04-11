<script>
	import { page } from '$app/state';

	import { ContactIcon, HouseIcon, ScrollText, ScrollTextIcon } from '@lucide/svelte';
</script>

<header class="[&_a]:p-4 [&_a]:block [&_a]:hover:shadow-2xl border-t flex justify-between sticky left-0 right-0 top-0 z-50 border-b bg-background/80 backdrop-blur-sm shadow-sm">
	<h1 class="flex-1">
		<a href="/" class="content-center">
			{page.data.title ?? 'GET to the POINT'}
		</a>
	</h1>

	<nav>
		<ul class="flex h-full [&>*]:border-l">
			<li>
				<a href="/">
					<HouseIcon class="inline-block mr-2 h-4 w-4" />
					Home
				</a>
			</li>
			<li>
				<a href="/contact">
					<ContactIcon class="inline-block mr-2 h-4 w-4" />
					Contact</a>
			</li>
			<li>
				<a href="/backstage">
					<ScrollTextIcon class="inline-block mr-2 h-4 w-4" />
					backstage</a>
			</li>
		</ul>
	</nav>
</header>