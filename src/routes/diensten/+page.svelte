<script>
	import copywriter from "../../lib/components/tabs/copywriter.svelte";
	import schrijfcoach from "../../lib/components/tabs/schrijfcoach.svelte";
    import redactie from "../../lib/components/tabs/redactie.svelte";
  import Nav from "../../lib/components/Nav.svelte";
  import Footer from "../../lib/components/Footer.svelte";

	let tabs = [
		{ name: "copywriter", comp: copywriter },
		{ name: "schrijfcoach", comp: schrijfcoach},
        { name: "redactie", comp: redactie}
	];

	let cur = tabs[0];
</script>

{#each tabs as tab}
	<button class:selected={cur === tab} on:click={() => (cur = tab)}>
		{tab.name}
	</button>
{/each}

<main>
	<Nav/>
	<svelte:component this={cur.comp} />
</main>
<Footer/>

<style>
    *{
        background-color: #000;
        color: #fff;
    }
	button {
        font-size: 1vw;
		cursor: pointer;
		padding: 0.5rem 1rem;
		border: 1px solid transparent;
		margin-bottom: -1px;
		background-color: #000;
	}
	button.selected {
        color: #8FD2FF ;
		border-top-width: 8px;
		
	}
	main {
		font-size: 1rem;
		padding: 2rem;
        background-color: #000;
		
	}
</style>
