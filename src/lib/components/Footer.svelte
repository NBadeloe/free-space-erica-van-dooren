<footer>
  <section class="footer-socials">
    <a href="https://www.linkedin.com/in/erica-van-dooren-224b3635/"
      ><img src="../assets/linkedin.svg" alt="" width="20" height="20" /></a
    >
    <a href="https://www.facebook.com/ericavandooren"
      ><img src="../assets/facebook.svg" alt="" width="20" height="20" /></a
    >
    <a href="https://www.instagram.com/ericavandooren/"
      ><img src="../assets/instagram.svg" alt="" width="20" height="20" /></a
    >
  </section>
  <section class="footer-links">
    <a
      href="https://www.ericavandooren.nl/wp-content/uploads/2023/04/Privacyverklaring-1-1.pdf"
      target="_blank"
      rel="noopener">Privacyverklaring</a
    >
    <a
      href="https://www.ericavandooren.nl/wp-content/uploads/2023/04/Algemene-voorwaarden.pdf"
      target="_blank"
      rel="noopener">Algemene voorwaarden</a
    >
  </section>
  <section class="footer-info">
    <p>BTW-nummer: NL183913553B01</p>
    <p>KvK-nummer: 39092777</p>
  </section>
</footer>

<style>
  footer {
    width: 100%;
    height: 10em;
    background-color: #000;
    border: #fff 1px solid;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .footer-socials {
    width: 8em;
    height: 3em;
    margin: 4em;
    justify-content: center;
    display: flex;
  }
  .footer-socials > a {
    margin: 0.6em;
  }

  .footer-links {
    margin: 4em;
    display: flex;
    flex-direction: column;
  }
  .footer-links > a {
    color: #fff;
    text-decoration: none;
  }

  .footer-info {
    margin: 2em;
  }
/* mobile */
  @media only screen and (max-width: 1024px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
    footer {
      display: flex;
      height: min-content;
      width: auto;
      flex-direction: column;
      justify-content: space-evenly;
      padding-left: 2em;
    }
    .footer-info,
    .footer-links,
    .footer-socials {
      margin: 1em;
    }
  }
</style>
