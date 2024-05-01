<script>
	import Tabs from './Tabs.svelte';
	import TabPanel from './TabPanel.svelte';
	import TabList from './TabList.svelte';
	import Tab from './Tab.svelte';
	import Nav from '../../lib/components/Nav.svelte'
	import Footer from '../../lib/components/Footer.svelte'

    export let data;
    const tabData = data;
	
	let selectedId = "first";
</script>


<Nav/>
<Tabs {selectedId}>
	<TabList>
		<Tab id="first">Copywriter
		</Tab>
		<Tab id="second">Schrijfcoach</Tab>
		<Tab id="third">Redactie</Tab>
	</TabList>

	<TabPanel id="first">
		<section class="tabBody">
			{@html tabData.copywriter.content }
		</section>
		
	</TabPanel>

	<TabPanel id="second">
		<section class="tabBody">
			{@html tabData.schrijfcoach.content }
		</section>
	</TabPanel>

	<TabPanel id="third">
		<section class="tabBody">
		{@html tabData.redactie.manuscript }
		{@html tabData.redactie.redigeren }
		{@html tabData.redactie.redactieProeflezen }
		{@html tabData.redactie.redactieWebsite }
		
		{@html tabData.redactie.text4 }
		{@html tabData.redactie.text5 }
		{@html tabData.redactie.text6 }
		{@html tabData.redactie.text7 }
	</section>
	</TabPanel>
</Tabs>
<Footer/>
<style>
      :global(:root) {
    margin: 0;
    padding: 0;
    color: #fff;
    background-color: #000;
  }
  * {
    background-color: #000;
    color: #fff;
  }

  .tabBody {
    margin: 10em auto;
    width: 50em;
    height: max-content;
  }
  h1 {
    margin-bottom: 2em;
  }
  
  /* mobile */
  @media only screen and (max-width: 1024px),
    (min-device-width: 768px) and (max-device-width: 1024px){


  .tabBody{

      font-size: 3vw;
      margin: 3em;
      width: unset;
      text-align:start;
  }
	}
</style>