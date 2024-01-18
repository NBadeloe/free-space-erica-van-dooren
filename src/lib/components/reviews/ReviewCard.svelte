<script>
    export let naam
    export let review
    export let url
</script>

<article class="card-img">
    <img src="{url}" alt="afbeelding van persoon">
  </article>

  <article class="card-content">
    <h3>{naam}</h3>
    <q>
      {review}
    </q>
  </article>
<style>


      /* elke set van 2 heeft een andere kleur */
  article {
    width: 10em;
    height: 15em;
    margin: 2em;
    padding: 1em;
    flex-shrink: 0;
    background-color: #000;
    border: #fff 1px solid;
  }
  article:nth-child(6n + 3) {
    border: #d9ff00 1px solid;
  }
  article:nth-child(6n + 4) {
    border: #d9ff00 1px solid;
  }

  article:nth-child(6n + 5) {
    border: #001aff 1px solid;
  }
  article:nth-child(6n + 6) {
    border: #001aff 1px solid;
  }
</style>