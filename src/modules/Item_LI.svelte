<script>
	export let text = "";
	export let rating = false;
	const ratingStrings = ["Notions", "Débutant", "Familier", "Bon", "Très bon", "Maîtrise"];
</script>

<style>
	dd {
		margin-left: 10px;
	}

	dd.double {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.rating {
		background-color: #fff;
		color: #6a54f6;
		padding: 2px 5px;
		font-size: 12px;
		border-radius: 3px;
		font-weight: 500;
		box-shadow: 0 0.2px 0.2px rgba(0, 0, 0, 0.008), 0 0.5px 0.5px rgba(0, 0, 0, 0.012),
			0 0.9px 0.9px rgba(0, 0, 0, 0.015), 0 1.6px 1.6px rgba(0, 0, 0, 0.018),
			0 2.9px 2.9px rgba(0, 0, 0, 0.022), 0 7px 7px rgba(0, 0, 0, 0.03);
		border: 1px solid #6a54f6;
	}
</style>

{#if rating === false}
	<dd>{text}</dd>
{:else}
	<dd class="double">
		<div class="text">{text}</div>
		<div class="rating">{ratingStrings[+rating]}</div>
	</dd>
{/if}
