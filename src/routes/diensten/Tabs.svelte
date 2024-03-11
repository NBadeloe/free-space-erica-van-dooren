<script context="module">
	export const tabContextId = new Set();
</script>

<script>
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
  
	
	export let selectedId;
	
	const selectedTab = writable(selectedId);
	
	$: selectedTab.set(selectedId);

	setContext(tabContextId, {
		selectTab: tabId => selectedId = tabId,
		selectedTab,
	});
</script>

<div class="tabs">
	<slot></slot>
</div>
<style>
   @import url("https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Quicksand:wght@400;500;600&display=swap");

:global(:root) {
  margin: 0;
  padding: 0;
  color: #fff;
  background-color: #000;
}

</style>