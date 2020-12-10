<script>
	import {fade} from "svelte/transition";
	import {openTab} from "../stores.js";
</script>

<style>
	header {
		position: relative;
		width: 100%;
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
		z-index: 4;
		flex: 1 0 auto;
	}
	.info {
		display: flex;
		margin-bottom: 30px;
	}
	.desc {
		width: 450px;
		max-width: 100%;
		margin-bottom: 17px;
		text-align: center;
		opacity: 0.6;
		letter-spacing: 0.4px;
		font-size: 14px;
		border-bottom: 1px solid #80808040;
		padding-bottom: 20px;
	}
	.tabs {
		display: flex;
		gap: 17px;
	}
	.tab {
		color: #6254bd;
		background-color: white;
		text-transform: uppercase;
		font-size: 14px;
		cursor: pointer;
		padding: 6px 19px;
		border-radius: 6px;
		border: 1px solid #6254bd;
		box-shadow: 0px 3px 5px 0px #0000000d, 0px 3px 2px -2px #00000052;
		transition: 0.2s;
	}
	.tab.active {
		background-color: #6a54f6;
		color: white;
	}
	#avatar {
		flex: 0 0 auto;
		display: flex;
		width: 80px;
		height: 80px;
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

	#title h1 {
		color: #6254bd;
	}

	#title h2 {
		font-weight: 400;
		font-size: 18px;
		line-height: 1.2em;
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
	<div class="desc">
		Actuellement en formation intensive chez Simplon, je recherche un stage de développeur web ou
		logiciel à Nantes du 4 au 29 janvier.
	</div>
	<div class="tabs">
		<div
			class="tab"
			class:active={$openTab == 'infos'}
			on:click={() => {
				$openTab = 'infos';
			}}>
			Infos
		</div>
		<div
			class="tab"
			class:active={$openTab == 'contact'}
			on:click={() => {
				$openTab = 'contact';
			}}>
			Contact
		</div>
	</div>
</header>
