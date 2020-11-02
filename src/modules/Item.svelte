<script>
	export let text = "";
	export let date = false;
</script>

<style>
	span {
		margin-left: 10px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.date {
		opacity: 0.7;
	}
</style>

<span>
	<div class="text">{text}</div>
	{#if date}
		<div class="date">{date}</div>
	{/if}
</span>
