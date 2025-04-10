<script>
	import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css';
	import '../app.css';
	import Nav from '$lib/components/nav/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const { children } = $props();
</script>

<div class="flex min-h-dvh flex-col bg-background text-foreground">
	<Nav />
	<main class="m-auto">
		{@render children()}
	</main>
	<Footer />
</div>