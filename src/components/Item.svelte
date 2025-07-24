<script>
	export let text = "";
	export let date = '';
	export let solo = false;
	export let under = "";
</script>

<div class="wrapper">
	<div class="text" class:solo>
		{text}
		{#if under.length}
			<div class="under">{under}</div>
		{/if}
	</div>
	{#if date.length}
		<div class="date">{date}</div>
	{/if}
</div>

<style>
	.wrapper {
		margin-left: 10px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.text {
		padding-right: 10px;
	}

	.solo {
		font-weight: 600;
		color: var(--main-color);
	}

	.date,
	.under {
		opacity: 0.7;
		font-size: 14px;
		margin-top: 0px;
		margin-bottom: 5px;
	}
</style>
