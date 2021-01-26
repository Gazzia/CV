<script>
	import {openTab} from "../stores.js";
	import {fly, fade} from "svelte/transition";
	import Map from "./Map.svelte";
	import Box from "./Box.svelte";
	import Item from "./Item.svelte";
	import ItemList from "./Item_List.svelte";
	import LI from "./Item_LI.svelte";
	import Tab from "./Map.svelte";
	export let ready = false;
	import {scrollToTop} from "svelte-scrollto";
</script>

<main in:fade>
	<img src="assets/blob1.svg" alt="" class="blob1" />
	<img src="assets/blob2.svg" alt="" class="blob2" />
	{#if $openTab == "infos"}
		<div class="tab" in:fly|local={{x: -500, delay: 300}} out:fly|local={{x: -500}}>
			<Box title="Dev skills">
				<ItemList title="Web">
					<LI icon="compouté.png" text="HTML5, CSS/SASS responsive" rating="5" />
					<LI icon="compouté.png" text="Javascript, Typescript" rating="5" />
					<LI icon="brick.png" text="Svelte.js" rating="5" />
					<LI icon="data.png" text="Google Firebase, GCP" rating="4" />
					<LI icon="brick.png" text="Vue.js" rating="4" />
					<LI icon="brick.png" text="Angular" rating="3" />
					<LI icon="brick.png" text="React" rating="1" />
				</ItemList>
				<ItemList title="Node">
					<LI text="Module Bundlers (Rollup, Snowpack..)" rating="3" />
					<LI text="Electron" rating="3" />
				</ItemList>
				<ItemList title="Java">
					<LI text="Maven, Spring, Hibernate" rating="2" />
					<LI text="JDK 1.8 +" rating="2" />
				</ItemList>
				<Item solo text="MySQL" />
			</Box>
			<Box title="Skills">
				<ItemList title="Soft skills">
					<LI text="Pédagogie et écoute" />
					<LI text="Curiosité, investissement" />
					<LI text="Autonomie, implication" />
				</ItemList>
				<Item solo text="Méthodes agiles" />
				<Item solo text="Intégration continue" />
				<ItemList title="Langues">
					<LI text="Anglais" rating="3" />
					<LI text="Espagnol" rating="0" />
					<LI text="Russe" rating="0" />
					<LI text="Esperanto" rating="0" />
				</ItemList>
			</Box>
			<Box title="Parcours pro" dated spaced>
				<Item text="Partenaire et développeur full-stack @Sumwhere" date="Jan. 2021" />
				<Item text="Stage dev. web @Sumwhere" />
				<Item text="Manutention" date="2020" />
				<div class="sub">Entreprises de cartonnage</div>
				<div class="sub">Agriculture</div>
				<div class="sub">Livraison meubles</div>
				<Item text="Aide-dentaire" />
				<Item text="Commis de cuisine/crêpier" date="2017" />
			</Box>
			<Box title="formation">
				<Item
					text="Titre pro. développeur Web/Web mobile JS/Java"
					under="Simplon - Sept 2020 - avr 2021 [Bac+2]"
				/>
				<Item
					text="Certification - Excellence en maîtrise qualité Web"
					under="Opquast - Décembre 2020"
				/>
				<Item
					text="L1 - Langues étrangères appliquées"
					under="Université de Nantes - 2016/2017"
				/>
				<Item text="Bac. Economique et Social" under="Lycée Francois Rabelais (85200) - 2016" />
			</Box>
			<Box title="loisirs">
				<Item solo text="Lecture" />
				<Item solo text="Cinéma de genre, absurde" />
				<Item solo text="Web" />
				<div class="sub">Développement de webapps - projets perso</div>
				<div class="sub">Intêret pour l'open-source</div>
				<Item solo text="Randonnée" />
				<Item solo text="Partir à l'aventure sans destination déterminée 🧭" />
			</Box>
			<div class="backToTop_wrapper">
				<div class="backToTop" on:click={scrollToTop}>
					<div class="label">Retour en haut</div>
					<img src="assets/arrow-up.svg" alt="" />
				</div>
			</div>
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

<style>
	main {
		padding: 40px 25px;
		max-width: 900px;
		margin: auto;
		display: flex;
		position: relative;
		z-index: 3;
		flex: 1 0 auto;
		width: 100vw;
		box-sizing: border-box;
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
		font-weight: 600;
		font-size: 14px;
		text-transform: uppercase;
	}

	.sub {
		opacity: 0.7;
		margin-left: 25px;
	}
	.backToTop_wrapper {
		width: 100%;
		display: flex;
		justify-content: flex-end;
	}
	.backToTop {
		font-size: 13px;
		text-transform: uppercase;
		font-weight: 600;
		letter-spacing: 0.4px;
		color: #6254bd;
		cursor: pointer;
		background-color: white;
		border-radius: 6px;
		padding: 5px 7px;
		box-shadow: 0px 3px 5px 0px #0000000d, 0px 3px 2px -2px #00000052;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex: 0 0 auto;
		gap: 5px;
	}
	.blob1 {
		position: absolute;
		height: 120vh;
		top: -40vh;
		left: -40vw;
		animation: 9s ease-in-out 1s infinite alternate both blob1;
	}
	.blob2 {
		position: absolute;
		height: 120vh;
		top: 55vh;
		right: -40vw;
		animation: 7s ease-in-out 1s infinite alternate both blob2;
	}
	@media screen and (max-width: 830px) {
		.blob2 {
			top: 100vh;
			right: -40vw;
		}
	}
	@media screen and (max-width: 500px) {
		.blob2 {
			top: 140vh;
			right: -40vw;
		}
	}
	@keyframes blob1 {
		0% {
			left: -40vw;
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(10deg);
		}
		100% {
			left: -50vw;
			transform: rotate(-10deg);
		}
	}
	@keyframes blob2 {
		0% {
			right: -40vw;
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(6deg);
		}
		100% {
			right: -35vw;
			transform: rotate(-4deg);
		}
	}
</style>
