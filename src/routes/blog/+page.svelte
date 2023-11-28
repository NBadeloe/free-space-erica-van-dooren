<script>
  export let data

  const articles = data?.allArticles || []
</script>

<div>
  <div class="title">
      <h1>
          Blog Posts
      </h1>
  </div>
  <div class="articles">
      <div class="article-cards">
          {#each articles as article}
              <a href="blog/{article.slug}">
                  <div class="article-card">
                      <div class="article-title">
                          {article.titel}
                      </div>

                      {#if article.publicationDate}
                          <div class="article-publication-date">
                              Post released on: { new Date(article.publicationDate).toLocaleString() }
                          </div>
                      {/if}
                  </div>
              </a>
          {/each}
      </div>
  </div>
</div>