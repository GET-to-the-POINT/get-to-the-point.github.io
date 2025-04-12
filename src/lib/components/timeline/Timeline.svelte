<script>
	import TimelineItem from '$lib/components/timeline/TimelineItem.svelte';

	const dates = ['2024-02-20', '2024-01-15', '2023-12-01', '2023-11-10', '2023-10-05'];
</script>

<div class="relative">
	<div class="flex flex-col gap-8">
		{#each dates as date}
			<TimelineItem {date} />
		{/each}
	</div>
</div>
