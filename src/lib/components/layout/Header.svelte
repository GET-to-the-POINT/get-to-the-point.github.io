<script>
	import { page } from '$app/state';

	import { ContactIcon, HouseIcon, ScrollTextIcon } from '@lucide/svelte';
</script>

<header
	class="sticky top-0 z-50 flex cursor-pointer justify-between border-y backdrop-blur
	 [&_a]:block [&_a]:p-4 [&_a]:transition-all [&_a]:duration-300 [&_a]:ease-in-out [&_a]:hover:bg-white/75"
>
	<h1 class="flex-1">
		<a class="content-center" href="/">
			{page.data.title ?? 'GET to the POINT'}
		</a>
	</h1>

	<nav>
		<ul class="flex h-full [&>*]:border-l">
			<li>
				<a href="/">
					<HouseIcon class="mr-2 inline-block h-4 w-4" />
					Home
				</a>
			</li>
			<li>
				<a href="/contact">
					<ContactIcon class="mr-2 inline-block h-4 w-4" />
					Contact</a
				>
			</li>
			<li>
				<a href="/backstage">
					<ScrollTextIcon class="mr-2 inline-block h-4 w-4" />
					backstage</a
				>
			</li>
		</ul>
	</nav>
</header>
