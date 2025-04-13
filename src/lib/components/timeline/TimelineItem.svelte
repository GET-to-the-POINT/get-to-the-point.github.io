<script>
	import { Card } from '$lib/components/ui/card';
	import { getLocale } from '$lib/paraglide/runtime.js';
	import { datetime } from '$lib/paraglide/registry.js';
	import { Calendar1 } from '@lucide/svelte';
	import { CalendarClock } from '@lucide/svelte';

	const { meta, gitLog, value } = $props();

	/** @type {Intl.DateTimeFormatOptions} */
	const formattedOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit'
	};
</script>

<div>
	<div class="mb-2">
		<Card class="overflow-hidden [&>*]:px-4 [&>*:first-child]:pt-4 [&>*:last-child]:pb-4">
			<div class="flex justify-between">
				<h1 class="mb-2 font-extrabold">
					{meta.title}
				</h1>

				<div
					class="
						text-gray-700
						before:mr-2
						before:text-sm
						before:content-['작성자']
						[&>span]:inline-block
						[&>span]:rounded-full
						[&>span]:bg-gray-200
						[&>span]:px-2 [&>span]:py-1 [&>span]:text-xs [&>span]:font-semibold"
				>
					{#each gitLog as log}
						<span>
							{log.author}
						</span>
					{/each}
				</div>
			</div>

			<div>
				{@html value}
			</div>
		</Card>
	</div>

	<div
		class="text-end text-sm text-gray-700 [&>div]:mb-1 [&>div>*:first-child]:inline-block"
	>
		<div>
			<Calendar1 />
			<span>최초 작성 : {datetime(getLocale(), gitLog.at(0).datetime, formattedOptions)}</span>
		</div>
		{#if gitLog.at(-1).datetime !== gitLog.at(0).datetime}
			<div>
				<CalendarClock />
				<span>최종 수정 : {datetime(getLocale(), gitLog.at(-1).datetime, formattedOptions)}</span>
			</div>
		{/if}
	</div>
</div>
