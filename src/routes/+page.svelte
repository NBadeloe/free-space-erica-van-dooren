<script>
   import Footer from "../lib/components/Footer.svelte";
import Nav from "../lib/components/Nav.svelte";
   import Reviews from "../lib/components/reviews/Reviews.svelte";

   
    export let data
    const items = data?.homepage || []
</script>
<main>
    <Nav/>
    <h1>Erica van Dooren</h1>

    <section class="introductie">
       <article class="introductie-text"> 
         {@html items.introductie}
        </article>
        <img src="{items.afbeelding.url}" alt="">
     

    </section>
    <section class="werkzaamheden-section">
      <section class="werkzaamheden">
               <h2>werkzaamheden</h2>
               <p>{@html items.werkzaamheden}
               </p>
         </section>
         <section class="gepubliceerde-verhalen">
            <h2>Gepubliceerde verhalen</h2>
            <p>
               {@html items.gepubliceerdeVerhalen}
            </p>
         </section>
    </section>
    <Reviews/>
   
  <Footer/>
</main>
<style>

  @import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Quicksand:wght@400;500;600&display=swap');

    :global(body) { 
        margin: 0;
        padding: 0;
        color: #fff;
    }

    main{
        background-color: #000;
        background-image: url(../assets/background.svg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 99.9%;
        
    }
     h1{
        font-family: 'Libre Caslon Text', serif;
        color: #fff;
        font-size: 10em;
        margin-top: 1em;
        display: flex;
        justify-content: center;
     }
     h2{
        font-family: 'Libre Caslon Text', serif;
     }
     p{
        font-family: 'Quicksand', sans-serif;
     }
     
     .introductie-text {
        font-family:  'Quicksand', sans-serif;
     }
   
     .introductie{
        color: #fff;
        margin: 10em;
        display: flex;
        justify-self: center;
     }

     .introductie > img{
        width: 22em;
        height: 28em;
        margin-left: 5em;
     }

     .introductie-text {
       margin: 5em;
       width: 45em;
       height: 20em;
     }

     .werkzaamheden-section{
        display: flex;
        flex-direction: row;
        margin: 10em;
     }

     .werkzaamheden, .gepubliceerde-verhalen{
      display: flex;
      flex-direction: column;
      width: 45em;
      height: 20em;
      margin: 5em;
     }
   
</style>

