<script>
  import ReviewCard from "./ReviewCard.svelte";
  export let data;
  const reviews = data?.allReviews || [];
</script>

<section class="review">
 
 
</section>

<style>
  @media screen and (max-width: 500px) {
    .review {
      border-radius: 8px;

      padding: 24px;
      position: relative;
      top: 0;
      width: 15em;
      font-size: smaller;
    }

    ::-webkit-scrollbar-track {
      border: 1px solid rgb(255, 255, 255);
      background-color: #000000;
    }

    ::-webkit-scrollbar {
      width: 10px;
      background-color: #000000;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #ffffff;
    }
  }

  .review {
    overflow: auto;
    display: flex;
    scroll-snap-type: x mandatory;
    gap: 24px;
    height: fit-content;
    margin: auto;
    width: 70em;
  }

  /* width: 80em;
      margin: 2em auto;
      display: flex;
      flex-direction: row;
      overflow-x: scroll;  */

  ::-webkit-scrollbar-track {
    border: 1px solid rgb(255, 255, 255);
    background-color: #000000;
  }

  ::-webkit-scrollbar {
    width: 10px;
    background-color: #000000;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ffffff;
  }
  /* mobile */
  @media only screen and (max-width: 1024px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
    .review {
      top: unset;
      border-radius: 8px;
      position: relative;
      width: 30em;
      max-width: calc(100% - 4em);
      margin: 0 auto;
      padding: 0 10px;
      font-size: smaller;
      overflow: auto;
      display: flex;
      scroll-snap-type: x mandatory;
      gap: 10px;
      height: fit-content;
    }

    ::-webkit-scrollbar-track {
      border: 1px solid rgb(255, 255, 255);
      background-color: #000000;
    }

    ::-webkit-scrollbar {
      width: 10px;
      background-color: #000000;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #ffffff;
    }
  }

  ::-webkit-scrollbar-track {
    border: 1px solid rgb(255, 255, 255);
    background-color: #000000;
  }

  ::-webkit-scrollbar {
    width: 10px;
    background-color: #000000;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ffffff;
  }
</style>
