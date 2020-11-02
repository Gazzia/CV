<script>
	export let text = "";
	export let otherData = false;
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

	.other {
		opacity: 0.7;
	}
</style>

{#if !otherData}
	<dd>{text}</dd>
{:else}
	<dd class="double">
		<div class="text">{text}</div>
		<div class="other">{otherData}</div>
	</dd>
{/if}
