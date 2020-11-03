<script>
	export let title = "";
</script>

<style>
	dl {
		display: flex;
		flex-direction: column;
		grid-gap: 6px;
		margin: 0;
		margin-left: 10px;
	}
	dl dt {
		font-weight: 600;
		color: #6254bd;
	}
</style>

<dl>
	<dt>{title}</dt>
	<slot />
</dl>
