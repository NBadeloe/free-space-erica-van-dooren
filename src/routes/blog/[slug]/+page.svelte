<script>
  import { StructuredText } from "@datocms/svelte";
  import { error } from "@sveltejs/kit";
  import Nav from "../../../lib/components/Nav.svelte";
  import Footer from "../../../lib/components/Footer.svelte";
  export let data;
  const { article } = data;
  if (!article) {
    throw error(404, { message: "Article Not found" });
  }
</script>
<Nav/>
<main>
  <section class="article">
    <h1 class="article-title">
      {article.titel}
    </h1>

    <section class="article-content">
      {@html article.content}
    </section>
  </section>
</main>

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
  main {
    background-color: #000;
    margin: 0;
  }

  .article {
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


  .article{
   
      font-size: 4vw;
      margin: 2em;
      width: unset;
      text-align:start;
    
  }
}
</style>
