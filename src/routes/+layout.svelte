<script>
	import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css';
	import '../app.css';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import { onNavigate } from '$app/navigation';

	const { children } = $props();

	onNavigate((navigation) => {
		// 모션 감소 설정 감지
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		// 만약 startViewTransition이 없거나 모션 감소가 설정되어 있으면 트랜지션을 실행하지 않음
		if (
			prefersReducedMotion ||
			!document.startViewTransition ||
			navigation.to.url.pathname === navigation.from.url.pathname
		) {
			return;
		}

		return new Promise((resolve) => {
			const transition = document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});

			transition.updateCallbackDone.then(() => {});

			transition.ready.then(() => {});

			transition.finished.then(() => {});
		});
	});
</script>

<Header />

<main class="min-h-screen">
	{@render children()}
</main>

<Footer />
