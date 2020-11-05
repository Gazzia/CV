<script>
	//  import mapStyles from './map-styles'; // optional

	let container;
	let map;
	let marker;
	let zoom = 12;
	let center = {lat: 47.188541702515856, lng: -1.5314786175686979};
	import {onMount} from "svelte";

	onMount(async () => {
		map = new google.maps.Map(container, {
			zoom,
			center,
			disableDefaultUI: true,
			fullscreenControl: true,
			zoomControl: true,
			scaleControl: true,
		});
		marker = new google.maps.Marker({
			position: center,
			map: map,
		});
	});
</script>

<style>
	.wrapper {
		width: 100%;
		height: 350px;
		overflow: hidden;
		border-radius: 10px;
		margin-top: 5px;
	}
</style>

<div class="wrapper" bind:this={container} />
