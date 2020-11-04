<script>
	import {fade} from "svelte/transition";
</script>

<style>
	header {
		position: relative;
		width: 100%;
		height: 200px;
		display: flex;
		background-color: white;
		justify-content: center;
		align-items: center;
		box-shadow: 0 0.8px 3.2px rgba(0, 0, 0, 0.008), 0 1.9px 7.6px rgba(0, 0, 0, 0.012),
			0 3.6px 14.3px rgba(0, 0, 0, 0.015), 0 6.5px 25.5px rgba(0, 0, 0, 0.018),
			0 12.1px 47.6px rgba(0, 0, 0, 0.022), 0 29px 114px rgba(0, 0, 0, 0.03);
		padding: 20px;
		box-sizing: border-box;
		flex-direction: column;
	}
	.info {
		display: flex;
		margin-bottom: 20px;
	}
	.button {
		color: #6254bd;
		padding: 10px 15px;
		box-shadow: 0 0.4px 1.2px rgba(0, 0, 0, 0.024), 0 1.1px 3.3px rgba(0, 0, 0, 0.035),
			0 2.7px 7.8px rgba(0, 0, 0, 0.046), 0 9px 26px rgba(0, 0, 0, 0.07);
		border-radius: 6px;
	}
	#avatar {
		flex: 0 0 auto;
		display: flex;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		position: relative;
		overflow: hidden;
		box-shadow: 0 1.1px 2.2px rgba(0, 0, 0, 0.011), 0 2.7px 5.3px rgba(0, 0, 0, 0.016),
			0 5px 10px rgba(0, 0, 0, 0.02), 0 8.9px 17.9px rgba(0, 0, 0, 0.024),
			0 16.7px 33.4px rgba(0, 0, 0, 0.029), 0 40px 80px rgba(0, 0, 0, 0.04);
	}

	#avatar img {
		width: 100%;
		height: 100%;
	}

	#title {
		display: flex;
		justify-content: center;
		/* align-items: center; */
		flex-direction: column;
		margin-left: 30px;
		/* text-align: center; */
	}
	h1 {
		color: #6254bd;
	}

	#title h2 {
		font-weight: 400;
		font-size: 18px;
	}
</style>

<header in:fade>
	<div class="info">
		<div id="avatar"><img src="assets/avatar.webp" alt="" /></div>
		<div id="title">
			<h1>Joseph Allain</h1>
			<h2>Développeur Web Full Stack JS</h2>
		</div>
	</div>
	<div class="button">Me contacter</div>
</header>
