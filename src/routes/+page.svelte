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
   <img src="{items.afbeelding.url}" alt="">
    <section class="introductie">
       <article class="introductie-text"> 
         {@html items.introductie}
        </article>
        
     

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

    @media screen and (max-width: 500px) {
	main{
        background-color: #000;
        background-image: url(../assets/background.svg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        width: 100%;
        
    }

    h1{
      font-size: 9vw;
     
      margin-bottom: 10vw;
    }

    .introductie{
      display: flex;
     
    }

   img{
      display: flex;
      margin: auto;
      width: 50vw;
      height: 50vw;
      max-width: 100%;
      object-fit: cover;
      
    }

    .introductie-text{
      font-size: 5vw;
    }

    

    .werkzaamheden, .gepubliceerde-verhalen{
      margin-bottom: 8vw;
      width: 100%;
      height: 70vw;
    }
}
    
     
   
</style>

