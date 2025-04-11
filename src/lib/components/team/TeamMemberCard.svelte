<script>
	import { Card, CardContent, CardHeader } from '$lib/components/ui/card';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';

	/**
	 * @typedef {Object} TeamMember
	 * @property {string} name - The name of the team member.
	 * @property {string} role - The role of the team member.
	 * @property {string} bio - A short biography of the team member.
	 * @property {string} image - The URL of the team member's image.
	 * @property {string} githubUrl - The URL of the team member's GitHub profile.
	 */

	const { member, ...rest } = $props();
</script>

<Card
	as="a"
	href={member.githubUrl ?? '#'}
	class="card-enter w-sm max-w-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out"
	{...rest}
>
	<CardHeader class="flex flex-col items-center gap-4 pt-6">
		<Avatar class="h-24 w-24">
			<AvatarImage alt={member.name} src={member.image} />
			<AvatarFallback>{member.name[0]}</AvatarFallback>
		</Avatar>
		<div class="text-center">
			<h3 class="text-xl font-semibold">{member.name}</h3>
			<p class="text-sm text-muted-foreground">{member.role}</p>
		</div>
	</CardHeader>
	<CardContent>
		<p class="text-center text-muted-foreground">{member.bio}</p>
	</CardContent>
</Card>