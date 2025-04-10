<script>
	import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css';
	import '../app.css';
	import Nav from '$lib/components/nav/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const { children } = $props();
</script>

<Nav />

<main>
	{@render children()}
</main>

<Footer />