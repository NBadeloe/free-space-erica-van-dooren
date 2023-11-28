<script>
    import { StructuredText } from '@datocms/svelte';
    import { error } from '@sveltejs/kit';
    export let data;
    const { blog } = data;
    console.log(data)
    if (!blog) {
      throw error(404, { message: 'blog Not found' });
    }
  </script>
  <div class="blog">
    <h1 class="blog-title">
      {blog.titel}
    </h1>
    {#if blog.publicationDate}
      <div class="blog-publication-date">
        blog published on: {new Date(blog.publicationDate).toLocaleString()}
      </div>
    {/if}
    <div>
      <StructuredText data={blog.content} />
    </div>
  </div>