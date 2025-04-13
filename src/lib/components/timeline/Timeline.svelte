<script>
	import TimelineItem from '$lib/components/timeline/TimelineItem.svelte';

	let { posts } = $props();
</script>

<div class="relative">
	<div class="flex flex-col gap-8">
		{#each posts as post}
			<TimelineItem date={post.gitLog[0]?.datetime} title={post.data.title} description={post.data.description} value={post.value} />
		{/each}
	</div>
</div>
