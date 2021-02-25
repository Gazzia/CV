<script>
	import {onMount} from "svelte";
	import {Map, Marker, controls} from "@beyonk/svelte-mapbox";
	const {NavigationControl, ScaleControl} = controls;
	let mapComponent;
	const lat = 47.188541702515856;
	const lng = -1.5314786175686979;
	const zoom = 11.15;
	const center = [lng, lat];
	let shouldShow = false;

	onMount(() => {
		setTimeout(() => {
			shouldShow = true;
		}, 300);
	});

	$: if (mapComponent) {
		mapComponent.setCenter([lng, lat]);
	}

	function eventHandler(e) {
		const data = e.detail;
	}
</script>

{#if shouldShow}
	<Map
		accessToken="pk.eyJ1IjoiZ2F6emlhMjkiLCJhIjoiY2pvdm4wNG9zMWprYzNxbGtwbGg2c3hscSJ9.YlUXvjey2rHD1owGRA365Q"
		bind:this={mapComponent}
		on:recentre={(e) => console.log(e.detail.center)}
		options={{scrollZoom: true}}
		{center}
		{zoom}
	>
		<Marker {lat} {lng} color="#6a54f6" label="some marker label" popupClassName="class-name" />
		<NavigationControl />
		<ScaleControl />
	</Map>
{/if}

<style>
	:global(.mapboxgl-map) {
		height: 300px !important;
		width: 100%;
		border-radius: 11px;
	}
</style>
