<script>
	import TeamMemberCard from './TeamMemberCard.svelte';
	import taehui from '$lib/assets/taehui.png';
	import wooyeon from '$lib/assets/wooyeon.png';
	import hyeri from '$lib/assets/hyeri.png';
	import yurim from '$lib/assets/yurim.png';

	const teamMembers = [
		{
			name: '김우연',
			role: '팀원',
			bio: '안녕하세요! 저는 김우연이고, AI 기능 개발과 코드 품질 관리를 담당하고 있어요. 팀장님 옆에서 든든한 지원군 역할 중입니다!',
			image: wooyeon,
			githubUrl: 'https://github.com/wjddbs-yoon'
		},
		{
			name: '소혜리',
			role: '팀원',
			bio: '안녕하세요, 소혜리입니다. 컨텐츠도 만들고, 결제 시스템도 만들며 데모 제품 제작을 담당했어요. 월급 창구도 제가 만들었습니다!',
			image: hyeri,
			githubUrl: 'https://github.com/so460'
		},
		{
			name: '이유림',
			role: '팀원',
			bio: '안녕하세요, 이유림입니다. 소비자에게 직접 전달되는 영상을 만드는 과정을 책임졌어요. 제품을 세상에 내놓는 일, 제가 맡았습니다!',
			image: yurim,
			githubUrl: 'https://github.com/rimabc'
		},
		{
			name: '김태희',
			role: '팀장',
			bio: '안녕하세요, 팀장 김태희입니다. 개발 외적인 모든 걸 책임지고, 팀원들이 개발에 집중할 수 있도록 서포트하는 역할을 맡고 있어요.',
			image: taehui,
			githubUrl: 'https://github.com/XIYO'
		}
	];
</script>

<section class="py-16 px-8">
	<h2 class="mb-8 text-2xl after:content-['팀장_괴롭힌_순_🚑'] after:text-sm after:text-gray-500">팀원</h2>
	<div class="m-auto flex gap-8 flex-wrap">
		{#each teamMembers as member, i (member.name)}
			<TeamMemberCard as="a" {member} style={`--delay: ${500 * i}ms`} />
		{/each}
	</div>
</section>
