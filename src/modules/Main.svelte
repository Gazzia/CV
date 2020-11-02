<script>
	import {fade} from "svelte/transition";
	import Box from "./Box.svelte";
	import Item from "./Item.svelte";
	import ItemList from "./Item_List.svelte";
	import LI from "./Item_LI.svelte";
	import {pays} from "../data.js";
</script>

<style>
	main {
		display: grid;
		grid-gap: 25px;
		padding: 40px 25px;
		grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
		max-width: 900px;
		margin: auto;
	}
</style>

<main in:fade>
	<Box title="Ma formation" dated>
		<Item text="Simplon - Dev. web/Java" date="2020" />
		<Item text="L1 - Langues Étrangères Appliquées" date="2016" />
		<Item text="Bac économique et social" date="2012-2016" />
		<Item text="Brevet des collèges" date="2008-2012" />
	</Box>
	<Box title="Mes compétences">
		<ItemList title="Web">
			<LI text="HTML5, CSS/SASS" />
			<LI text="Javascript, Svelte" />
			<LI text="Google Firebase" />
		</ItemList>
		<ItemList title="Langues">
			<LI text="Anglais" otherData="Bon" />
			<LI text="Espagnol" otherData="Notions" />
			<LI text="Russe" otherData="Notions" />
			<LI text="Esperanto" otherData="Notions" />
		</ItemList>
	</Box>
	<Box title="Parcours professionnel" dated>
		<Item text="Manut/Aide-Machine" date="Sept. 2019 - 2020" />
		<Item text="Contrats agricoles" date="Avril-Juin 2019" />
		<Item text="Manut. (livrais° meubles)" date="2019" />
		<Item text="Aide dentaire" date="Nov 2018-Jan 2019" />
		<Item text="Contrat agricole" date="Août-Sept 2018" />
		<Item text="Garde d'enfant" date="2017-2018" />
		<Item text="Commis de cuisine/Crêpier" date="2017" />
	</Box>
	<Box title="Mes loisirs">
		<ItemList title="Voyages">
			{#each pays as item}
				<LI text={item} />
			{/each}
		</ItemList>
		<ItemList title="Web">
			<LI text="Développement de webapps pour des projets personnels" />
		</ItemList>
		<Item text="Randonnée" />
	</Box>
</main>
