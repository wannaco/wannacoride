<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<style>
	:global(html, body) {
		height: 100%;
	}

	:global(body) {
		margin: 0;
		font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial,
			"Apple Color Emoji", "Segoe UI Emoji";
		color: #0b2a3a;
		background: #94c9fe;
	}

	:global(a) {
		color: inherit;
	}
</style>

{@render children()}
