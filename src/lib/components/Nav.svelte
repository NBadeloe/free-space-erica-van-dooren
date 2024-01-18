<script>
   import { Hamburger } from 'svelte-hamburgers';
   let open;
</script>
<Hamburger --color="white" bind:open />

{#if open}
    <nav> 
      <a href="/portfolio">Portfolio</a>
      <a href="/diensten">Diensten</a>
      <a href="/blog">Blog</a>
      <a href="/contact">Contact</a>
   </nav>

{/if} 
<!-- <h2><a href="/"> Erica van Dooren</a></h2> -->


<style>
   @media screen and (max-width: 500px){
      nav{
         background-color: blue;
      }
   }

    /* nav{
      background-color: black;
        width: 100%;
        height: 5em;
        margin: 0;
        display: flex;
        justify-content: center;
        border: 1px solid #fff;
        color: #fff;
     }

     a{
        color: #fff;
        font-family: 'Quicksand', sans-serif;       
        margin: 2em;
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
     }  */

</style>