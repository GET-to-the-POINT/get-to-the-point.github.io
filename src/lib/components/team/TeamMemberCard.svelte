<script lang="ts">
	import { Card, CardHeader, CardContent } from "$lib/components/ui/card";
	import { Avatar, AvatarImage, AvatarFallback } from "$lib/components/ui/avatar";

	type TeamMember = {
		name: string;
		role: string;
		bio: string;
		image: string;
	};

	let { member }: { member: TeamMember } = $props();
</script>

<Card class="overflow-hidden">
	<CardHeader class="flex flex-col items-center gap-4 pt-6">
		<Avatar class="h-24 w-24">
			<AvatarImage src={member.image} alt={member.name} />
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
