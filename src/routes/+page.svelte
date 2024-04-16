<script>
  import Footer from "../lib/components/Footer.svelte";
  import Nav from "../lib/components/Nav.svelte";
  import Reviews from "../lib/components/reviews/Reviews.svelte";

  export let data;
  const items = data?.homepage || [];
</script>

<main>
  <Nav />
  <h1>Erica van Dooren</h1>
  <img src={items.afbeelding.url} alt="" />
  <section class="introductie">
    <article class="introductie-text">
      <p>{@html items.introductie}</p>
    </article>
  </section>
  <section class="werkzaamheden-section">
    <section class="werkzaamheden">
      <h2>werkzaamheden</h2>
      <p>{@html items.werkzaamheden}</p>
    </section>
    <section class="gepubliceerde-verhalen">
      <h2>Gepubliceerde verhalen</h2>
      <p>
        {@html items.gepubliceerdeVerhalen}
      </p>
    </section>
  </section>
  <Reviews />

  <Footer />
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Quicksand:wght@400;500;600&display=swap");

  :global(:root) {
    margin: 0;
    padding: 0;
    color: #fff;
    background-color: #000;
  }
  h1,
  h2 {
    font-family: "Libre Caslon Text", serif;
  }
  p {
    font-family: "Quicksand", sans-serif;
  }

  /* desktop */
  main {
    background-color: #000;
    background-image: url(../assets/background.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
  }

  h1 {
    font-size: 9vw;
    margin: 0.5em auto;
    width: max-content;
    height: max-content;
  }

  .introductie {
    display: flex;
    justify-self: flex-end;
  }

  img {
    display: flex;
    float: right;
    margin-right: 12em;
    width: 20vw;
    height: 30vw;
    object-fit: cover;
  }

  .introductie-text {
    font-size: 2vw;
    margin: 1em 6em;
    width: 20em;
  }

  .werkzaamheden-section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: max-content;
    height: 25em;
    margin: 8em auto;
    gap: 8em;
  }

  .gepubliceerde-verhalen,
  .werkzaamheden {
    margin: 2em;
    width: 25em;
    height: 10em;
  }

  /* mobile */
  @media only screen and (max-width: 1024px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
    h1,
    h2 {
      font-family: "Libre Caslon Text", serif;
    }
    p {
      font-family: "Quicksand", sans-serif;
    }
    main {
      background-color: #000;
      background-image: url(../assets/background.svg);
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      width: 101.5%;
    }

    h1 {
      font-size: 9vw;
      margin: 1em;
      margin-bottom: 10vw;
      width: max-content;
      height: max-content;
    }

    .introductie {
      display: flex;
      flex-direction: column;
    }

    img {
      display: block;
  margin-left: auto;
  margin-right: auto;
      float: none;
      width: 50vw;
      height: 50vw;
      max-width: 100%;
      object-fit: cover;
    }

    .introductie-text {
      font-size: 4vw;
      margin: 2em;
    }

    .werkzaamheden,
    .gepubliceerde-verhalen {
  
      text-align: justify;
      font-size: 3vw;
      height: min-content;
    }

    .werkzaamheden-section {
      display: flex;
      flex-direction: column;
      width: min-content;
      height: min-content;
      margin: 2em auto;
      gap: 2em;
    }
  }
</style>
