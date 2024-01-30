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
            <h2 class="article-title">
              {article.titel}
              </h2>
              <img src="{article.afbeelding.url}" alt="">
              <h3>{article.typeofpost}</h3>
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
    grid-template-columns: 15em 15em 15em;
    grid-template-rows: repeat(auto-fill, minmax(20em , 1fr));
    gap: 5em;
    grid-auto-flow: row;
    grid-template-areas:
      ". . ."
      ". . ."
      ". . .";
    
  }

  .article-cards{
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

a{
  text-decoration: none;
  color: #fff;
}
img{
  object-fit: contain;
  width: 8em;
  height: 10em;
}
h1 {
  display: flex;
    font-size: 2vw;

    width: max-content;
    height: max-content;
  }
h2{
  font-size: 1vw;

}
h3{
  font-size: 0.8vw;
}
</style>
