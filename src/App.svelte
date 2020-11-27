<script>
	import Header from "./modules/Header.svelte";
	import Main from "./modules/Main.svelte";
	export let ready;
</script>

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
		background-color: rgb(247, 244, 244);
		color: rgb(61, 56, 53);
		height: auto;
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

<svelte:head>
	<script
		defer
		async
		src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA05WH1_Bm0JaMP7QGSRtwZ8O0ibj0F6-k&callback=initMap">
	</script>
</svelte:head>

<div class="container">
	<Header />
	<Main bind:ready />
</div>
