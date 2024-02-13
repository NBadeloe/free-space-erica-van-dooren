<script>
   import { Hamburger } from 'svelte-hamburgers';
   let open;
</script>
<Hamburger --color="white" bind:open />

{#if open}
    <nav> 
      <a href="/">Home</a>
      <a href="/portfolio">Portfolio</a>
      <a href="/diensten">Diensten</a>
      <a href="/blog">Blog</a>
      <a href="/contact">Contact</a>
   </nav>

{/if} 


<style>
  
    /* nav {
        text-align: center;
        font-size: 1.5em;
        letter-spacing: 0.15em;
        padding: 1em;
        padding-top: 0;
        color: #fff;
    }
    a {
        cursor: pointer;
        width: max-content;
        margin: 1rem auto;
        text-decoration: none;
        color: #fff;
    }
    a:hover {
        text-decoration: underline;
    } */
   a {
   font-family: "Quicksand", sans-serif ;
   font-weight: 200;
   font-size: 2em;
  }
  @import url("https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Quicksand:wght@400;500;600&display=swap");

   nav{
      background-color: black;
        width: 100%;
        height: 5em;
        margin: 0;
        display: flex;
        justify-content: center;
   
        color: #fff;
     }

     a{
        color: #fff;
        font-family: 'Quicksand', sans-serif;       
        margin: 1em;
        justify-content: space-evenly;
        flex-direction: column;
        list-style: none;
        text-decoration: none;
     }
  
     h2{
        margin: 1em;
     }

     a:hover {
        color: #8FD2FF;
     }
     a:focus {
        color: #8FD2FF;
     }  

</style>