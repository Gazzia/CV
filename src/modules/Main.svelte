<script>
	import {fade} from "svelte/transition";
	import Box from "./Box.svelte";
	import Item from "./Item.svelte";
	import ItemList from "./Item_List.svelte";
	import LI from "./Item_LI.svelte";
</script>

<style>
	main {
		gap: 25px;
		padding: 40px 25px;
		max-width: 900px;
		margin: auto;
		display: flex;
		flex-wrap: wrap;
		position: relative;
		z-index: 3;
	}
</style>

<main in:fade>
	<Box centered full>
		Actuellement en formation à l'école Simplon, je recherche un stage d'un mois dans le
		développement web ou logiciel à Nantes.
	</Box>
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
</main>
