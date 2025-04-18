<script>
	import { page } from '$app/state';
	import { deLocalizeHref } from '$lib/paraglide/runtime.js';

	import ContactIcon from '@lucide/svelte/icons/contact';
	import HouseIcon from '@lucide/svelte/icons/house';
	import ScrollTextIcon from '@lucide/svelte/icons/scroll-text';
</script>

<header
	class="[&_li]:semi-bold sticky top-0 z-50 flex justify-between
	 border-y border-gray-200 bg-white transition-colors duration-500 ease-in-out
	 select-none [&_:not(h1)_a]:border-l [&_a]:block
	 [&_a]:h-full [&_a]:cursor-pointer [&_a]:content-center
	 [&_a]:border-gray-200
	 [&_a]:p-4 [&_a]:transition-all
	 [&_a]:duration-500 [&_a]:ease-in-out [&_a]:hover:bg-black
	 [&_a]:hover:text-white
	 [&_a[aria-current='page']]:bg-black
	 [&_a[aria-current='page']]:text-white [&_h1]:flex-1 [&_h1]:text-3xl [&_h1]:font-extrabold [&_ul]:flex [&_ul]:h-full"
>
	<h1>
		<a href="/">
			{page.data.title ?? 'GET to the POINT'}
		</a>
	</h1>

	<nav>
		<ul>
			<li>
				<a href="/" aria-current={deLocalizeHref(page.url.pathname) === '/' ? 'page' : undefined}>
					<HouseIcon class="mr-2 inline-block h-4 w-4" />
					Home
				</a>
			</li>
			<li>
				<a
					href="/contact"
					aria-current={deLocalizeHref(page.url.pathname) === '/contact' ? 'page' : undefined}
				>
					<ContactIcon class="mr-2 inline-block h-4 w-4" />
					Contact</a
				>
			</li>
			<li>
				<a
					href="/backstage"
					aria-current={deLocalizeHref(page.url.pathname) === '/backstage' ? 'page' : undefined}
				>
					<ScrollTextIcon class="mr-2 inline-block h-4 w-4" />
					backstage</a
				>
			</li>
		</ul>
	</nav>
</header>
