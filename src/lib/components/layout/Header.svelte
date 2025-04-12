<script>
	import { page } from '$app/state';

	import { ContactIcon, HouseIcon, ScrollTextIcon } from '@lucide/svelte';
</script>

<style>
  .header-container {
    container-type: scroll-state;
    position: sticky;
    top: 0;
		z-index: 10;
  }

  @supports (container-type: scroll-state) {
		header {
				transition: all .5s ease;
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

<div class="header-container">
	<header class="[&_a]:p-4 [&_a]:block [&_a]:hover:bg-white/75 [&_a]:transition-all [&_a]:duration-300 [&_a]:ease-in-out
	 overflow-hidden flex justify-between border backdrop-blur cursor-pointer">
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
</div>