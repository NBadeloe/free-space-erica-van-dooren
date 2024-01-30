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
    <h1 class="article-title">
      {article.titel}
    </h1>
  
    <div class="article-content">
  
     {@html article.content}
    </div>
  </div>

  <style>
    *{
      background-color: #000;
      color: #fff;
    }
  </style>