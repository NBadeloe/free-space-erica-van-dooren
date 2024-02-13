<script>
	import Tab1 from "./Tab1.svelte";
	import Tab2 from "./Tab2.svelte";
	import Tab3 from "./Tab3.svelte";
  import Tabs from "./Tabs.svelte";

  // List of tab items with labels, values and assigned components
  let items = [
    { label: "Copywriter",
		 value: 1,
		 component: Tab1
		},
    { label: "Redactie",
		 value: 2,
		 component: Tab2
		},
    { label: "Schrijfcoach",
		 value: 3,
		 component: Tab3
		}
  ];
</script>

<Tabs {items} />