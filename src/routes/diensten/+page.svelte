<script>
	import Tabs from './Tabs.svelte';
	import TabPanel from './TabPanel.svelte';
	import TabList from './TabList.svelte';
	import Tab from './Tab.svelte';

    export let data;
    const ass = data;
	
	let selectedId = "first";
</script>

<button on:click={() => { selectedId = selectedId === "first" ? "third" : "first" }}>
	Change tab from outside to {selectedId === "first" ? "third" : "first"}
</button>

<Tabs {selectedId}>
	<TabList>
		<Tab id="first">shithea
		</Tab>
		<Tab id="second">two</Tab>
		<Tab id="third">three</Tab>
	</TabList>

	<TabPanel id="first">
		{@html ass.copywriter }
	</TabPanel>

	<TabPanel id="second">
		<h2>Second panel</h2>
	</TabPanel>

	<TabPanel id="third">
		<h2>Third panel</h2>
	</TabPanel>
</Tabs>
<style>
    
</style>