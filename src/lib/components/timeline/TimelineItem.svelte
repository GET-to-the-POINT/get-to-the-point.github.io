<script>
	import { Card } from '$lib/components/ui/card';
	import { getLocale } from '$lib/paraglide/runtime.js';
	import { datetime } from '$lib/paraglide/registry.js';
	import Calendar1Icon from '@lucide/svelte/icons/calendar-1';
	import CalendarClockIcon from '@lucide/svelte/icons/calendar-clock';

	let { meta, gitLog, value } = $props();
	const authors = new Set(gitLog.map((log) => log.author));

	/** @type {Intl.DateTimeFormatOptions} */
	const formattedOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit'
	};
</script>

<li class="[&>div:first-child]:mb-2">
	<Card
		class="overflow-hidden [&_h1]:font-extrabold [&>*]:px-4 [&>*:first-child]:pt-4 [&>*:last-child]:pb-4"
	>
		<h1>
			{meta.title}
		</h1>

		<div
			class="text-right text-gray-700 [&>span]:mr-2 [&>span]:text-sm [&>ul]:inline-block [&>ul>li]:inline-block [&>ul>li]:rounded-full [&>ul>li]:bg-gray-200 [&>ul>li]:px-2 [&>ul>li]:py-1 [&>ul>li]:text-xs [&>ul>li]:font-semibold [&>ul>li:not(:last-child)]:mr-2"
		>
			<span>작성자</span>
			<ul>
				{#each authors as author}
					<li>
						{author}
					</li>
				{/each}
			</ul>
		</div>

		{@html value}
	</Card>

	<div class="text-end text-sm text-gray-700 [&>div]:mb-1 [&>div>*:first-child]:inline-block">
		<div>
			<Calendar1Icon />
			<span>최초 작성 : {datetime(getLocale(), gitLog.at(0).datetime, formattedOptions)}</span>
		</div>
		{#if gitLog.at(-1).datetime !== gitLog.at(0).datetime}
			<div>
				<CalendarClockIcon />
				<span>최종 수정 : {datetime(getLocale(), gitLog.at(-1).datetime, formattedOptions)}</span>
			</div>
		{/if}
	</div>
</li>
