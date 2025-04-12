<script>
	import { Card } from '$lib/components/ui/card';

	const { date } = $props();

	// Format date for display
	const formattedDate = new Date(date).toLocaleDateString("ko-KR", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
</script>

<div class="relative flex gap-8">
	<!-- Content area -->
	<div class="flex-1">
		<div class="mb-2 text-sm text-muted-foreground">
			{formattedDate}
		</div>
		<!-- Wrap Card with a div to apply transition -->
		<div>
			<Card>
				<div class="p-4">
					<!-- Content area placeholder -->
					<div class="h-24 rounded-md bg-muted/30" />
				</div>
			</Card>
		</div>
	</div>
</div>
