<script>
  import ReviewCard from "./ReviewCard.svelte";
</script>

<section class="review">
  <ReviewCard naam='jemoeder' review='jevader' url='https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fstupidcatsfr&psig=AOvVaw2ZRk8YVJZkZr3HpaGCN2sz&ust=1705656053545000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCvj4zO5oMDFQAAAAAdAAAAABAD'/>
  <ReviewCard naam='jemoeder' review='jevader' url='https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fstupidcatsfr&psig=AOvVaw2ZRk8YVJZkZr3HpaGCN2sz&ust=1705656053545000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCvj4zO5oMDFQAAAAAdAAAAABAD' />
  <ReviewCard naam='jemoeder' review='jevader' url='https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fstupidcatsfr&psig=AOvVaw2ZRk8YVJZkZr3HpaGCN2sz&ust=1705656053545000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCvj4zO5oMDFQAAAAAdAAAAABAD'/>
  <ReviewCard naam='jemoeder' review='jevader' url='https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fstupidcatsfr&psig=AOvVaw2ZRk8YVJZkZr3HpaGCN2sz&ust=1705656053545000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCvj4zO5oMDFQAAAAAdAAAAABAD'/>
  <ReviewCard naam='jemoeder' review='jevader' url='https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fstupidcatsfr&psig=AOvVaw2ZRk8YVJZkZr3HpaGCN2sz&ust=1705656053545000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCvj4zO5oMDFQAAAAAdAAAAABAD'/>
  <ReviewCard naam='jemoeder' review='jevader' url='https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fstupidcatsfr&psig=AOvVaw2ZRk8YVJZkZr3HpaGCN2sz&ust=1705656053545000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCvj4zO5oMDFQAAAAAdAAAAABAD'/>
  <ReviewCard naam='jemoeder' review='jevader' url='https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fstupidcatsfr&psig=AOvVaw2ZRk8YVJZkZr3HpaGCN2sz&ust=1705656053545000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCvj4zO5oMDFQAAAAAdAAAAABAD' />
  <ReviewCard naam='jemoeder' review='jevader' url='https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fstupidcatsfr&psig=AOvVaw2ZRk8YVJZkZr3HpaGCN2sz&ust=1705656053545000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCvj4zO5oMDFQAAAAAdAAAAABAD'/>
  <ReviewCard naam='jemoeder' review='jevader' url='https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fstupidcatsfr&psig=AOvVaw2ZRk8YVJZkZr3HpaGCN2sz&ust=1705656053545000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCvj4zO5oMDFQAAAAAdAAAAABAD'/>
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
</style>
