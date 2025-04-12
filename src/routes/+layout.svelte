<script>
	import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css';
	import '../app.css';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	const { children } = $props();
</script>

<Header />

<main class="min-h-screen">
	{@render children()}
</main>

<Footer />
