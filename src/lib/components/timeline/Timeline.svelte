<script>
	import TimelineItem from '$lib/components/timeline/TimelineItem.svelte';

	let { posts } = $props();
</script>

<ul class="[&>li:not(:last-child)]:mb-8">
	{#each posts as post}
		<TimelineItem meta={post.data} gitLog={post.gitLog} value={post.value} />
	{/each}
</ul>
