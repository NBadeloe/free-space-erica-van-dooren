<script>
    import Footer from "../../lib/components/Footer.svelte";
   import Nav from "../../lib/components/Nav.svelte"
</script>

<Nav/>

<main>
  <section class="contact">
    <section class="contact-text">
      <h2>Contacten</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatum
        quos corporis accusantium aut excepturi rerum aliquam sit quas ad,
        deserunt temporibus sunt praesentium cumque dolor. Nostrum, dolorem
        iste. Rerum.
      </p>
    </section>
    <form action="https://formspree.io/f/xkndgeyj" method="POST">
      <input
        type="text"
        name="name"
        id="full-name"
        placeholder="Naam"
        required
      />
      <input name="subject" placeholder="Onderwerp" required />

      <input type="email" name="email" placeholder="Email@email.com" required />

      <textarea name="message" placeholder="Typ hier uw bericht..." required
      ></textarea>

      <button type="submit">Verstuur bericht</button>
    </form>
  </section>
</main>
<Footer/>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    color: #fff;
    background-color: #000;
  }

  h2 {
    font-family: "Libre Caslon Text", serif;
  }
  form, p, input, textarea,  button{
    font-family: "Quicksand", sans-serif;
  }
  @import url("https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Quicksand:wght@400;500;600&display=swap");


  form {
    border: 1px black solid;
    display: flex;
    flex-direction: column;
    width: 30em;
    height: 30em;
  }

  input,
  textarea,
  button {
    resize: vertical;
    width: 35em;
    height: 3em;
    border: #8fd2ff 3px solid;
    background-color: #000;
    color: #fff;
    margin: 1em;
  }

  textarea{
    height: 20em;
  }

  .contact,
  .contact-text {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 8em;
  }
  .contact-text {
    flex-direction: column;
    width: 30em;
    height: 10em;
    margin-top: 0;
  }

  @media only screen and (max-width: 1024px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
    main {
      background-color: #000;
      width: 100%;
      height: max-content;
    }

    form {
    border: 1px black solid;
    display: flex;
    flex-direction: column;
    width: min-content;
    height: 30em;
    margin: 2em;

  }

  input,
  textarea,
  button {
    resize: vertical;
    width: 30em;
    height: 3em;
    border: #8fd2ff 3px solid;
    background-color: #000;
    color: #fff;
  }
  textarea{
    height: 10em;
  }

  .contact,
  .contact-text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: auto;
    
  }
  .contact-text {
    flex-direction: column;
    align-items: flex-start;
    width: auto;
    height: min-content;
    margin:1em 2em;
    text-align: inherit;
  }

  }
</style>
