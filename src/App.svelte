<script>
	import Header from "./modules/Header.svelte";
	import Main from "./modules/Main.svelte";
</script>

<style>
	:global(html, body) {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		padding: 0;
		margin: 0;
		font-family: "Poppins", sans-serif;
		overflow: hidden;
	}
	.container {
		background-color: rgb(247, 244, 244);
		color: rgb(61, 56, 53);
		height: 100vh;
		overflow-y: auto;
	}
	:global(h1, h2, h3) {
		margin: 0;
		padding: 0;
	}
</style>

<div class="container">
	<Header />
	<Main />
</div>
