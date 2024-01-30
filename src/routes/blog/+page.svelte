<script>
  export let data;

  const articles = data?.allArticles || [];
</script>
<main>
<div>
  <div class="title">
    <h1>Blog Posts</h1>
  </div>
  <div class="articles">
   
      {#each articles as article}
       <div class="article-cards" style="border-color:var(--{article.typeofpost});">
        <a href="blog/{article.slug}">
          <div class="article-card">
            <div class="article-title">
              {article.titel}
              {article.typeofpost}
            </div>
          </div>
        </a></div>
      {/each}
    
  </div>
</div>
</main>
<style>
:root{
    --Recensie: #24A0FF;
    --Interview: #2969FF;
    --Verslag: #8FD2FF; 
}
main{
    background-color: #000;
    color: #FFF;
}
  .articles {
    display: grid;
    justify-content: center;
    grid-template-columns: 10em 10em 10em;
    grid-template-rows: repeat(auto-fill, minmax(15em , 1fr));
    gap: 5em;
    grid-auto-flow: row;
    grid-template-areas:
      ". . ."
      ". . ."
      ". . .";
    
  }

  .article-cards{
    padding: 1em;
    background-color: pink;

    border: 3px #fff solid;
    width: 10em;
    height: 15em;
  }
</style>
