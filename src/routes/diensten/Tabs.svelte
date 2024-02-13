<script>
  import Nav from "../../lib/components/Nav.svelte";
  import Footer from "../../lib/components/Footer.svelte"

  export let items = [];
  export let activeTabValue = 1;

  const handleClick = tabValue => () => (activeTabValue = tabValue);
</script>
<Nav/>
<ul>
{#each items as item}
	<li class={activeTabValue === item.value ? 'active' : ''}>
		<span on:click={handleClick(item.value)}>{item.label}</span>
	</li>
{/each}
</ul>
{#each items as item}
	{#if activeTabValue == item.value}
	<div class="box">
		<svelte:component this={item.component}/>
	</div>
	{/if}
{/each}

<Footer/>
<style>
   @import url("https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Quicksand:wght@400;500;600&display=swap");

:global(:root) {
  margin: 0;
  padding: 0;
  color: #fff;
  background-color: #000;
}
/* h1, h2{
  font-family: "Libre Caslon Text", serif;
}
p {
  font-family: "Quicksand", sans-serif ;
} */
	.box {
		margin-bottom: 10px;
		padding: 40px;
    border-top: 0;
	}
  ul {
    display: flex;
    justify-content: center;
    font-size: 2em;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
	li {
		margin-bottom: -1px;
	}

  span {
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    display: block;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  span:hover {
    color: #8fd2ff;
  }

  li.active > span {
    color: #8fd2ff;
  }
</style>