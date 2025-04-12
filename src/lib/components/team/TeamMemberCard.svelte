<script>
	import { Card, CardContent, CardHeader } from '$lib/components/ui/card';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { GithubIcon } from '@lucide/svelte';

	/**
	 * @typedef {Object} TeamMember
	 * @property {string} name - The name of the team member.
	 * @property {string} role - The role of the team member.
	 * @property {string} bio - A short biography of the team member.
	 * @property {string} image - The URL of the team member's image.
	 * @property {string} githubUrl - The URL of the team member's GitHub profile.
	 */

	const { as, member, ...rest } = $props();
</script>

<Card
	{as}
	href={member.githubUrl}
	class="card-enter overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-2xl"
	{...rest}
>
	<a
		href={member.githubUrl}
		class="absolute mt-4 ml-4 rounded-full border border-gray-500 p-4 hover:bg-gray-500"
		><GithubIcon class="h-5 w-5 text-gray-400" />
	</a>
	<CardHeader class="flex flex-col items-center gap-4 pt-6">
		<Avatar class="h-24 w-24">
			<AvatarImage alt={member.name} src={member.image} />
			<AvatarFallback>{member.name[0]}</AvatarFallback>
		</Avatar>
		<div class="text-center">
			<h3 class="text-xl font-semibold">{member.name}</h3>
			<p class="text-muted-foreground text-sm">{member.role}</p>
		</div>
	</CardHeader>
	<CardContent>
		<p class="text-muted-foreground text-center">{member.bio}</p>
	</CardContent>
</Card>
