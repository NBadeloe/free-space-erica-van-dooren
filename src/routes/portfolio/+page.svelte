<script>
  import Footer from "../../lib/components/Footer.svelte";
  import Nav from "../../lib/components/Nav.svelte";
</script>

<main>
  <Nav />
  <h2>Portfolio</h2>
  <table role="table">
    <thead role="rowgroup">
      <tr role="row">
        <th role="columnheader">First Name</th>
        <th role="columnheader">Last Name</th>
        <th role="columnheader">Job Title</th>
      </tr>
    </thead>
    <tbody role="rowgroup">
      <tr role="row">
        <td role="cell">
            <a href="https://www.eldersliterair.nl/blast/">Blast!</a>
        </td>
        <td role="cell">Elders literair</td>
        <td role="cell">01/12/2023</td>
      </tr>
      <tr role="row">
        <td role="cell">
          <a href="https://www.eldersliterair.nl/slagwerk/">Slagwerk!</a>
        </td>
        <td role="cell">Elders literair</td>
        <td role="cell">25/11/2022</td>
      </tr>
      <tr role="row">
        <td role="cell"
          ><a
            href="https://www.eldersliterair.nl/ibanez/"
            target="_blank"
            rel="noopener">Ibanez</a
          ></td
        >
        <td role="cell">Elders literair</td>
        <td role="cell">16/09/2022</td>
      </tr>
      <tr role="row">
        <td role="cell"
          ><a
            href="https://www.eldersliterair.nl/jazzy-en-jack/"
            target="_blank"
            rel="noopener">Jazzy en Jack</a
          ></td
        >
        <td role="cell">Elders literair</td>
        <td role="cell">05/08/2022</td>
      </tr>
      <tr role="row">
        <td role="cell"
          ><a
            href="https://www.hostwriters.nl/TWIST/TWIST23/mobile/index.html?fbclid=IwAR1CdCEj_ZPtDrQQgWRwct7IzooAbOY7-EoPixjjRdpqlwMD48K9khlc6RQ"
            target="_blank"
            rel="noopener">Tien millimeter</a
          ></td
        >
        <td role="cell">Twist, literair magazine voor ongewone verhalen</td>
        <td role="cell">01/07/2022</td>
      </tr>
      <tr role="row">
        <td role="cell"
          ><a
            href="https://www.eldersliterair.nl/jazz/"
            target="_blank"
            rel="noopener">Jazz!</a
          ></td
        >
        <td role="cell">Elders literair</td>
        <td role="cell">18/06/2022</td>
      </tr>
      <tr role="row">
        <td role="cell"
          ><a
            href="https://drive.google.com/file/d/1oxSDOaA7pTiVPzS9l8VKtiEK5uP6QB2S/view?fbclid=IwAR3_5pwqANV0RRKrJePR1jBPvazv76MIWifCAqJR60MG-RAe6keK5VRsiPA"
            target="_blank"
            rel="noopener"
            >Vertaling Paniekvogel in Braziliaans literair tijdschrift Littera</a
          ></td
        >
        <td role="cell">Vertaling in Braziliaans literair tijdschrift Littera</td>
        <td role="cell">31/03/2022</td>
      </tr>
      <tr role="row">
        <td role="cell"
          ><a
            href="https://www.eldersliterair.nl/paniekvogel/"
            target="_blank"
            rel="noopener">Paniekvogel</a
          ></td
        >
        <td role="cell">Elders literair</td>
        <td role="cell">18/03/2022</td>
      </tr>
      <tr role="row">
        <td role="cell"
          ><a
            href="https://drive.google.com/file/d/1GCsoAD7kuLm0wy22TI_yBK2RKkmxK0Pz/view?fbclid=IwAR3E_SdutnIWcp2xQUJBISXkbf5um6rM3cq0fWCOnqNtVksbdCWJn1dT0Bs"
            target="_blank"
            rel="noopener"
            >Erica geïnterviewd door vijf Braziliaanse schrijvers in Littera</a
          ></td
        >
        <td role="cell">Interview vijf schrijvers in literair tijdschrift Littera</td>
        <td role="cell">17/01/2022</td>
      </tr>
      <tr role="row">
        <td role="cell"
          ><a
            href="https://straatnieuwsutrecht.nl/straatnieuws-1-2022/voor-het-voetlicht/"
            target="_blank"
            rel="noopener">Voor het voetlicht</a
          ></td
        >
        <td role="cell">Straatnieuws Utrecht</td>
        <td role="cell">29/12/2021</td>
      </tr>
    </tbody>
  </table>
  <!-- <section>
             <table width="616">
            <tbody>
            <tr>
            <td width="224"><a href="https://www.eldersliterair.nl/blast/" target="_blank" rel="noopener">Blast!</a></td>
            <td width="315">Elders literair</td>
            <td width="77">01/12/2023</td>
            </tr>
            <tr>
            <td><a href="https://www.eldersliterair.nl/slagwerk/" target="_blank" rel="noopener">Slagwerk!</a></td>
            <td>Elders literair</td>
            <td>25/11/2022</td>
            </tr>
            <tr>
            <td><a href="https://www.eldersliterair.nl/ibanez/" target="_blank" rel="noopener">Ibanez</a></td>
            <td>Elders literair</td>
            <td>16/09/2022</td>
            </tr>
            <tr>
            <td><a href="https://www.eldersliterair.nl/jazzy-en-jack/" target="_blank" rel="noopener">Jazzy en Jack</a></td>
            <td>Elders literair</td>
            <td>05/08/2022</td>
            </tr>
            <tr>
            <td><a href="https://www.hostwriters.nl/TWIST/TWIST23/mobile/index.html?fbclid=IwAR1CdCEj_ZPtDrQQgWRwct7IzooAbOY7-EoPixjjRdpqlwMD48K9khlc6RQ" target="_blank" rel="noopener">Tien millimeter</a></td>
            <td>Twist, literair magazine voor ongewone verhalen</td>
            <td>01/07/2022</td>
            </tr>
            <tr>
            <td><a href="https://www.eldersliterair.nl/jazz/" target="_blank" rel="noopener">Jazz!</a></td>
            <td>Elders literair</td>
            <td>18/06/2022</td>
            </tr>
            <tr>
            <td><a href="https://drive.google.com/file/d/1oxSDOaA7pTiVPzS9l8VKtiEK5uP6QB2S/view?fbclid=IwAR3_5pwqANV0RRKrJePR1jBPvazv76MIWifCAqJR60MG-RAe6keK5VRsiPA" target="_blank" rel="noopener">Vertaling Paniekvogel in Braziliaans literair tijdschrift Littera</a></td>
            <td>Vertaling in Braziliaans literair tijdschrift Littera</td>
            <td>31/03/2022</td>
            </tr>
            <tr>
            <td><a href="https://www.eldersliterair.nl/paniekvogel/" target="_blank" rel="noopener">Paniekvogel</a></td>
            <td>Elders literair</td>
            <td>18/03/2022</td>
            </tr>
            <tr>
            <td><a href="https://drive.google.com/file/d/1GCsoAD7kuLm0wy22TI_yBK2RKkmxK0Pz/view?fbclid=IwAR3E_SdutnIWcp2xQUJBISXkbf5um6rM3cq0fWCOnqNtVksbdCWJn1dT0Bs" target="_blank" rel="noopener">Erica geïnterviewd door vijf Braziliaanse schrijvers in Littera</a></td>
            <td>Interview vijf schrijvers in literair tijdschrift Littera</td>
            <td>17/01/2022</td>
            </tr>
            <tr>
            <td><a href="https://straatnieuwsutrecht.nl/straatnieuws-1-2022/voor-het-voetlicht/" target="_blank" rel="noopener">Voor het voetlicht</a></td>
            <td>Straatnieuws Utrecht</td>
            <td>29/12/2021</td>
            </tr>
            </tbody>
            </table>
        </section> -->

  <Footer />
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    color: #fff;
    background-color: #000;
  }

  @media
	  only screen 
    and (max-width: 760px), (min-device-width: 768px) 
    and (max-device-width: 1024px)  {

		/* Force table to not be like tables anymore */
		table, thead, tbody, th, td, tr {
			display: block;
		}

		/* Hide table headers (but not display: none;, for accessibility) */
		thead tr {
			position: absolute;
			top: -9999px;
			left: -9999px;
		}

    tr {
      margin: 0 0 1rem 0;
    }
      
    tr:nth-child(odd) {
      background: #ccc;
    }
    tr:nth-child(even) {
      background: #ff0000;
    }
    
		td {
			/* Behave  like a "row" */
			border: none;
			position: relative;
			padding-left: 10%;
		}

		td:before {
			/* Now like a table header */
			position: absolute;
			/* Top/left values mimic padding */
			top: 0;
			left: 6px;
			width: 45%;
			padding-right: 10px;
			white-space: nowrap;
		}
    }


 

  @media screen and (min-width: 501px) {
    main {
      background-color: #000;
      margin: 0;
      padding: 0;
      width: 99.9%;
      height: 100%;
    }
    h2 {
      font-size: 2.5em;
      margin: 1.5em 0em 1em 10em;
    }

    /* section{
        display: flex;
        margin: 5em auto ;
        width: 70em;
        height: 40em;
        
    }
  
    a{
        color: #fff;
        text-decoration: none;
    } */
  }
</style>
