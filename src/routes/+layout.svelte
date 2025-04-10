<script>
	import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css';
	import "../app.css";

	const { children } = $props();
</script>

<header>
	<h1>
		<a href="/">
			GET to the POINT
		</a>
	</h1>

	<nav>
		<ul>
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</nav>
</header>

{@render children()}
