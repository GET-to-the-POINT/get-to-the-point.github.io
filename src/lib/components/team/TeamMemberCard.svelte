<script lang="ts">
	import { Card, CardContent, CardHeader } from '$lib/components/ui/card';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';

	type TeamMember = {
		name: string;
		role: string;
		bio: string;
		image: string;
		githubUrl: string;
	};

	const { member }: { member: TeamMember } = $props();
</script>

<a href={member.githubUrl ?? '#'}>
	<Card class="overflow-hidden hover:shadow-2xl">
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
</a>