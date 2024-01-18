<script>

</script>
<main>
    <h2>Contacten</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatum quos corporis 
        accusantium aut excepturi rerum aliquam sit quas ad, deserunt temporibus sunt praesentium
         cumque dolor. Nostrum, dolorem iste. Rerum.</p>
    <form >
        <input type="text" name="naam" id="naam" placeholder="Naam">
        <input type="email" name="email" id="email" placeholder="email@email.com">
        <textarea name="email-content" id="email-content" cols="30" rows="10"></textarea>
    </form>
    <button type="submit">Verstuur</button>
</main>

<style>
    :global(body) {
    margin: 0;
    padding: 0;
    color: #fff;
    background-color: #000;
  }

 form{
        border: 1px black solid;
    }

    @media screen and (max-width:500px){
        main{
            background-color: #000;
            width: 100%;
            height: max-content;
        }

        form{
            display: flex;
            flex-direction: column;
            width: 30em;
            height: 40em;
            display: flex;
        }

        input, #email-content{
            width: 25em;
            height: 3em;
            margin: 1em;
            padding: 0.2em;
            border: 3px lightskyblue solid;
            resize: none;
        }

        #email-content{
            height: 10em;
        }

        
    }
   
</style>