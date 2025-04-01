<script>
	import Header from "./modules/Header.svelte";
	import Main from "./modules/Main.svelte";
</script>

<div class="container">
	<Header />
	<Main />
</div>

<style>
	:global(html, body) {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: auto;
		padding: 0;
		margin: 0;
		font-family: "Poppins", sans-serif;
	}
	.container {
		color: rgb(61, 56, 53);
		height: auto;
		min-height: 100vh;
		overflow-y: hidden;
		overflow-x: hidden;
		display: flex;
		flex-direction: column;
	}
	:global(h1, h2, h3) {
		margin: 0;
		padding: 0;
	}
</style>
