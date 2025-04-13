<script>
	import { Card } from '$lib/components/ui/card';
	import { getLocale } from '$lib/paraglide/runtime.js';
	import { datetime } from '$lib/paraglide/registry.js';

	const { title, date, value } = $props();

	/** @type {Intl.DateTimeFormatOptions} */
	const formattedOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
	};
</script>

<div class="relative flex gap-8">
	<!-- Content area -->
	<div class="flex-1">
		<div class="text-muted-foreground mb-2 text-sm">
			{datetime(getLocale(), date, formattedOptions)}
		</div>
		<!-- Wrap Card with a div to apply transition -->
		<div>
			<Card>
				<div class="p-4">
					<h1 class="font-extrabold mb-2">
						{title}
					</h1>
					<!-- Content area placeholder -->
					<div>
						{@html value}
					</div>
				</div>
			</Card>
		</div>
	</div>
</div>
