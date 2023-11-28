<script>
  import { StructuredText } from '@datocms/svelte';
  import { error } from '@sveltejs/kit';
  export let data;
  const { article } = data;
  if (!article) {
    throw error(404, { message: 'Article Not found' });
  }
</script>
<div class="article">

{#each article as article }
  <h1> {article.titel} </h1>
{/each}

  <h1 class="article-title">
    {article.titel}
  </h1>
  {#if article.publicationDate}
    <div class="article-publication-date">
      Article published on: {new Date(article.publicationDate).toLocaleString()}
    </div>
  {/if}
  <div>
    <StructuredText data={article.content} />
  </div>
</div>