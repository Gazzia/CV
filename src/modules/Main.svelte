<script>
	import {openTab} from "../stores.js";
	import {fly, fade} from "svelte/transition";
	import Map from "./Map.svelte";
	import Box from "./Box.svelte";
	import Item from "./Item.svelte";
	import ItemList from "./Item_List.svelte";
	import LI from "./Item_LI.svelte";
	import {scrollToTop} from "svelte-scrollto";
	import {contact, formations, devSkillGroups, skillGroups, experiences, loisirs} from "../data.js";
</script>

<main in:fade>
	<img src="assets/blob1.svg" alt="" class="blob1" />
	<img src="assets/blob2.svg" alt="" class="blob2" />
	{#if $openTab == "infos"}
		<div class="tab" in:fly|local={{x: -500, delay: 300}} out:fly|local={{x: -500}}>
			<Box title="Dev skills">
				{#each devSkillGroups as skillGroup}
					{#if skillGroup.content}
						<ItemList title={skillGroup.title}>
							{#each skillGroup.content as skill}
								<LI icon="{skill.icon}.png" text={skill.title} rating={skill.rating} />
							{/each}
						</ItemList>
					{:else}
						<Item solo text={skillGroup.title} />
					{/if}
				{/each}
			</Box>
			<Box title="Skills">
				{#each skillGroups as skillGroup}
					{#if skillGroup.content}
						<ItemList title={skillGroup.title}>
							{#each skillGroup.content as skill}
								<LI text={skill.title} rating={skill.rating} />
							{/each}
						</ItemList>
					{:else}
						<Item solo text={skillGroup.title} />
					{/if}
				{/each}
			</Box>
			<Box title="Parcours pro" dated spaced>
				{#each experiences as experience}
					<Item text={experience.title} date={experience.date} />
					{#if experience.desc}
						<div class="sub">{experience.desc}</div>
					{/if}
				{/each}
			</Box>
			<Box title="formation">
				{#each formations as formation}
					<Item text={formation.title} under={formation.desc} />
				{/each}
			</Box>
			<Box title="loisirs">
				{#each loisirs as loisir}
					<Item solo text={loisir.title} />
					{#if loisir.content}
						{#each loisir.content as desc}
							<div class="sub">{desc.title}</div>
						{/each}
					{/if}
				{/each}
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
					<div class="value">{contact.phone}</div>
				</div>
				<div class="elem">
					<div class="label">Mail</div>
					<div class="value">{contact.email}</div>
				</div>
				<div class="elem">
					<div class="label">Adresse</div>
					<div class="value">{contact.address}</div>
				</div>
				<Map />
			</Box>
		</div>
	{/if}
</main>

<style>
	main {
		padding: 40px 25px;
		max-width: 950px;
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
		font-size: 14px;
		margin-top: -5px;
		margin-bottom: 5px;
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
