<script>
	import { getContext } from 'svelte';
	import { tabContextId } from './Tabs.svelte';
	
	export let id;
	
	const { selectedTab, selectTab } = getContext(tabContextId);
</script>


<button 
	class:selected="{$selectedTab === id}" 
	on:click="{() => selectTab(id)}"
>
	<slot></slot>
</button>

<style>
	
  @import url("https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Quicksand:wght@400;500;600&display=swap");

 
     .selected, button{
		background-color: black;
        color: #fff;
        font-family: 'Quicksand', sans-serif;       
        margin: 1em;
        justify-content: space-evenly;
        flex-direction: column;
        list-style: none;
        text-decoration: none;
		border: none;
		font-family: "Quicksand", sans-serif ;
   font-weight: 200;
   font-size: 2vw;
     }
  

     .selected, button:hover {
        color: #8FD2FF;
     }
     .selected, button:focus {
        color: #8FD2FF;
     }  
	 @media only screen and (max-width: 1024px),
    (min-device-width: 768px) and (max-device-width: 1024px){
	 .selected, button{
		font-size: 3vw;
	 }
	}
</style>
