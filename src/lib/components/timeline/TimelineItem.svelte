<script>
	import { Card } from '$lib/components/ui/card';

	const { date, value } = $props();

	// Format date for display
	const formattedDate = new Date(date).toLocaleDateString('ko-KR', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>

<div class="relative flex gap-8">
	<!-- Content area -->
	<div class="flex-1">
		<div class="text-muted-foreground mb-2 text-sm">
			{formattedDate}
		</div>
		<!-- Wrap Card with a div to apply transition -->
		<div>
			<Card>
				<div class="p-4">
					<!-- Content area placeholder -->
					<div class="bg-muted/30 h-24 rounded-md" >
						{@html value}
					</div>
				</div>
			</Card>
		</div>
	</div>
</div>
