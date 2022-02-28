<script>
	export let title = "";
	export let dated = false;
	export let full = false;
	export let centered = false;

	export let spaced = false;
</script>

<section class:full class:centered>
	{#if title}
		<h3 class="title highlight">{title}</h3>
	{/if}
	<div class="boxContent" class:dated class:centered class:spaced>
		<slot />
	</div>
</section>

<style>
	section {
		background-color: white;
		border-radius: 6px;
		padding: 15px 20px 32px;
		box-shadow: 0 0.5px 1.3px rgba(0, 0, 0, 0.01), 0 1.1px 3.1px rgba(0, 0, 0, 0.016),
			0 2.1px 5.9px rgba(0, 0, 0, 0.018), 0 3.8px 10.5px rgba(0, 0, 0, 0.023),
			0 7.1px 19.6px rgba(0, 0, 0, 0.035), 0 17px 47px rgba(0, 0, 0, 0.04);
		display: flex;
		flex-direction: column;
		flex: 1 1 auto;
		position: relative;
	}

	section.centered {
		padding-bottom: 15px;
	}

	.full {
		width: 100%;
	}
	.title {
		text-transform: uppercase;
		letter-spacing: 0.4px;
		font-size: 16px;
		font-weight: 700;
		width: 100%;
		text-align: center;
		margin-bottom: 15px;
		color: #6254bd;
	}
	.boxContent {
		gap: 6px;

		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
		flex: 1 1 auto;
		justify-content: space-around;
	}

	.boxContent.spaced {
		gap: 6px;
	}

	.boxContent.dated {
		border-right: 2px dashed rgba(61, 56, 53, 0.41);
		padding-right: 12px;
		width: calc(100% - 15px);
	}
	.boxContent.dated::after {
		content: "";
		position: absolute;
		background-image: url("../../assets/up.svg");
		height: 20px;
		width: 17px;
		top: -12px;
		right: -9.5px;
		opacity: 0.5;
		background-size: 100%;
	}
	.boxContent.centered {
		justify-content: center;
		align-items: center;
		text-align: center;
		/* font-weight: 500; */
		letter-spacing: 0.3px;
		color: rgba(61, 56, 53, 0.89);
	}
</style>
