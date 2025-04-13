<script>
	import { page } from '$app/state';

	import { ContactIcon, HouseIcon, ScrollTextIcon } from '@lucide/svelte';
</script>

<header
	class="sticky top-0 z-50 flex cursor-pointer justify-between border-y
	 border-gray-200 bg-white transition-colors duration-500 ease-in-out select-none
	 [&_a]:block [&_a]:h-full
	 [&_a]:content-center [&_a]:border-l [&_a]:border-gray-200
	 [&_a]:p-4 [&_a]:font-bold [&_a]:transition-all [&_a]:duration-300 [&_a]:ease-in-out [&_a]:hover:bg-black [&_a]:hover:text-white"
>
	<h1 class="flex-1">
		<a class="content-center text-3xl font-extrabold" href="/">
			{page.data.title ?? 'GET to the POINT'}
		</a>
	</h1>

	<nav>
		<ul class="flex h-full">
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
