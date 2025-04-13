<script>
	import TimelineItem from '$lib/components/timeline/TimelineItem.svelte';

	let { posts } = $props();
</script>

<div class="relative">
	<div class="flex flex-col gap-8">
		{#each posts as post}
			<TimelineItem meta={post.data} gitLog={post.gitLog} value={post.value} />
		{/each}
	</div>
</div>
