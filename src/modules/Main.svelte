<script>
	import {openTab} from "../stores.js";
	import {fly, fade} from "svelte/transition";
	import Map from "./Map.svelte";
	import Box from "./Box.svelte";
	import Item from "./Item.svelte";
	import ItemList from "./Item_List.svelte";
	import LI from "./Item_LI.svelte";
	import Tab from "./Map.svelte";
	export let ready;
</script>

<style>
	main {
		padding: 40px 25px;
		max-width: 900px;
		margin: auto;
		display: flex;
		position: relative;
		z-index: 3;
	}
	.tab {
		gap: 25px;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		position: relative;
	}

	.elem + .elem {
		margin-top: 15px;
	}

	.elem .label {
		color: #6254bd;
		font-weight: 500;
		font-size: 14px;
		text-transform: uppercase;
	}
</style>

<main in:fade>
	{#if $openTab == 'infos'}
		<div class="tab" in:fly|local={{x: -500, delay: 300}} out:fly|local={{x: -500}}>
			<Box title="études" dated full>
				<Item text="Simplon - Développement web/Java [en cours]" date="2020" />
				<Item text="L1 - Langues Étrangères Appliquées" date="2016" />
				<Item text="Bac économique et social" date="2012-2016" />
			</Box>
			<Box title="Dev skills">
				<ItemList title="Web">
					<LI text="HTML5, CSS/SASS responsive" />
					<LI text="Javascript, Svelte.js" />
					<LI text="Google Firebase" />
					<LI text="Vue.js" />
				</ItemList>
				<ItemList title="Node">
					<LI text="Module Bundlers (Rollup, Snowpack..)" />
					<LI text="Electron" />
					<LI text="Google Firebase" />
				</ItemList>
				<ItemList title="Java">
					<LI text="Maven" />
					<LI text="JDK 1.8" />
				</ItemList>
				<Item solo text="MySQL" />
			</Box>
			<Box title="Skills">
				<ItemList title="Soft">
					<LI text="Pédagogie et écoute" />
					<LI text="Curiosité" />
					<LI text="Investissement" />
					<LI text="Autonomie" />
				</ItemList>
				<ItemList title="Langues">
					<LI text="Anglais" otherData="Bon" />
					<LI text="Espagnol" otherData="Notions" />
					<LI text="Russe" otherData="Notions" />
					<LI text="Esperanto" otherData="Notions" />
				</ItemList>
			</Box>
			<Box title="Parcours" dated spaced>
				<Item text="Formation chez Simplon" date="Sept 2020" />
				<Item text="Nombreux emplois, majoritairement dans la manutention" />
				<Item text="Maîtrise de la plupart du langage Javascript" />
				<Item text="Développement de webapps, découverte de Node" />
				<Item text="Premières expériences en entreprise, dans la restauration" date="2017" />
				<Item text="Développement de petites pages statiques en HTML/CSS" date="2016-17" />
			</Box>
			<Box title="Mes loisirs">
				<Item solo text="Lecture" />
				<Item solo text="Cinéma de niche" />
				<ItemList title="Web">
					<LI text="Développement de webapps pour des projets personnels" />
				</ItemList>
				<Item solo text="Voyages" />
				<Item solo text="Randonnée" />
				<Item solo text="Aventure !" />
			</Box>
		</div>
	{:else}
		<div class="tab" in:fly|local={{x: 500, delay: 300}} out:fly|local={{x: 500}}>
			<Box centered>
				<div class="elem">
					<div class="label">Téléphone</div>
					<div class="value">0634394117</div>
				</div>
				<div class="elem">
					<div class="label">Mail</div>
					<div class="value">joseph.allain24@gmail.com</div>
				</div>
				<div class="elem">
					<div class="label">Adresse</div>
					<div class="value">76 route de Vertou 44200 Nantes</div>
				</div>
				{#if ready}
					<Map />
				{/if}
			</Box>
		</div>
	{/if}
</main>
