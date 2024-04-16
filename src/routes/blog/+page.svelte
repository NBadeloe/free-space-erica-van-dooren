<script>
  import Nav from "../../lib/components/Nav.svelte";

  export let data;

  const articles = data?.allArticles || [];
</script>

<main>
  <Nav />
  <div>
    <div class="title">
      <h1>Blog</h1>
    </div>
    <div class="articles">
      {#each articles as article}
        <div
          class="article-cards"
          style="border-color:var(--{article.typeofpost});"
        >
          <a href="blog/{article.slug}">
            <div class="article-card">
              <h2 class="article-title">
                {article.titel}
              </h2>
              <img src={article.afbeelding.url} alt="" />
              <h3>{article.typeofpost}</h3>
            </div>
          </a>
        </div>
      {/each}
    </div>
  </div>
</main>

<style>
  :root {
    --Recensie: #24a0ff;
    --Interview: #2969ff;
    --Verslag: #8fd2ff;
  }
  h1 {
    font-family: "Libre Caslon Text", serif;
  }
  h2 {
    font-family: "Quicksand", sans-serif;
  }
  @import url("https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Quicksand:wght@400;500;600&display=swap");

  main {
    background-color: #000;
    color: #fff;
    margin: 0;
  }
  .articles {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-gap: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 1rem;
  }

  .article-cards {
    padding: 0.5em;
    background-color: #000;
    border: 3px #fff solid;
    width: 15em;
    height: 20em;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
  img {
    object-fit: contain;
    width: 8em;
    height: 10em;
  }
  h1 {
    font-size: 2.5em;
    margin: 1.5em 0em 1em 10em;
  }
  h2 {
    font-size: 1vw;
  }
  h3 {
    font-size: 0.8vw;
  }

  /* mobile */
  @media only screen and (max-width: 1024px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
    .article-cards {
      padding: 0.5em;
      background-color: #000;
      border: 3px #fff solid;
      width: 15em;
      height: 20em;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    a {
      text-decoration: none;
      color: #fff;
    }
    img {
      object-fit: contain;
      width: 8em;
      height: 10em;
    }
    h1 {
      font-size: 2em;
      margin: 1.5em 0em 1em 1.5em;
    }
    h2 {
      font-size: 1vw;
    }
    h3 {
      font-size: 0.8vw;
    }
  }
</style>
