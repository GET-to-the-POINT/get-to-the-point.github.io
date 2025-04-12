<script>
	import { page } from '$app/state';

	import { ContactIcon, HouseIcon, ScrollTextIcon } from '@lucide/svelte';
</script>

<div class="header-container">
	<header
		class="flex cursor-pointer justify-between overflow-hidden border backdrop-blur
	 [&_a]:block [&_a]:p-4 [&_a]:transition-all [&_a]:duration-300 [&_a]:ease-in-out [&_a]:hover:bg-white/75"
	>
		<h1 class="flex-1">
			<a href="/" class="content-center">
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
</div>

<style>
	.header-container {
		container-type: scroll-state;
		position: sticky;
		top: 0;
		z-index: 10;
	}

	@supports (container-type: scroll-state) {
		header {
			transition: all 0.5s ease;
		}

		.header-container {
			@container scroll-state(stuck: top) {
				header {
					transform: translateY(10px);
					margin-inline: 5rem;
					border-radius: 1rem;
					box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
				}
			}
		}
	}
</style>
