<script>
	import {slide} from "svelte/transition";
	export let title = "";
	export let dated = false;
</script>

<style>
	section {
		background-color: white;
		border-radius: 6px;
		padding: 15px 20px;
		padding-bottom: 32px;
		box-shadow: 0 0.5px 1.3px rgba(0, 0, 0, 0.008), 0 1.1px 3.1px rgba(0, 0, 0, 0.012),
			0 2.1px 5.9px rgba(0, 0, 0, 0.015), 0 3.8px 10.5px rgba(0, 0, 0, 0.018),
			0 7.1px 19.6px rgba(0, 0, 0, 0.022), 0 17px 47px rgba(0, 0, 0, 0.03);
		display: flex;
		flex-direction: column;
	}

	.title {
		text-transform: uppercase;
		letter-spacing: 0.5px;
		font-size: 16px;
		font-weight: 500;
		width: 100%;
		text-align: center;
		margin-bottom: 15px;
		color: #6254bd;
	}
	.boxContent {
		gap: 6px;
		display: flex;
		flex-direction: column;
		flex: 1 1 auto;
		justify-content: space-around;
	}

	.boxContent.dated {
		border-right: 1px dashed rgba(61, 56, 53, 0.3);
		padding-right: 10px;
	}
</style>

<section in:slide={{delay: 600}}>
	<h3 class="title highlight">{title}</h3>
	<div class="boxContent" class:dated>
		<slot />
	</div>
</section>
