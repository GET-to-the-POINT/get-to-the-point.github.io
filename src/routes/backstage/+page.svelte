<script>
	import Timeline from '$lib/components/timeline/Timeline.svelte';

	const { data } = $props();
</script>

<section class="min-h-screen px-8 py-16">
	<h2
		class="mb-8 text-4xl font-bold after:block after:text-sm after:text-gray-500 after:content-['오늘도_열심히_했나요?🤔']"
	>
		Backstage
	</h2>
	<div class="mx-auto">
		<Timeline posts={data.category.allPosts} />
	</div>
</section>
