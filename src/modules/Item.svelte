<script>
	export let text = "";
	export let date = false;
	export let solo = false;
	export let under = false;
</script>

<style>
	span {
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
		color: #6254bd;
	}

	.date,
	.under {
		opacity: 0.7;
	}
</style>

<span>
	<div class="text" class:solo>
		{text}
		{#if under}
			<div class="under">{under}</div>
		{/if}
	</div>
	{#if date}
		<div class="date">{date}</div>
	{/if}
</span>
