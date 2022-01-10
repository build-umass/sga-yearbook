// Imports
import React from "react";
import Head from "next/head";

import Header from "../components/Header";
import Gallery from "./Gallery";
import Hero from "./Hero";
import MoreInfo from "./MoreInfo";
import Motivation from "./Motivation";
import Order from "./Order";
import Footer from "../components/Footer";
import History from "./History";

import ProductPage from "./old_product_page";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faChrome,
} from "@fortawesome/free-brands-svg-icons";
import { Helmet } from "react-helmet";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
// export default function Index() {
//   return (
//     <div className="outer">
//       <div className="bg-image">
//         <Image layout="fill" src={backgroundImg} />
//       </div>
//       <div className="content">
//         <div className="about-bg">
//           <div className="bg-gradient-transparent">
//             <Navbar />
//           </div>
//           <div>
//             <History />
//           </div>
//         </div>
//         <ProductPage />
//       </div>
//       <Footer className="footer-wrapper" />
//     </div>
//   );
// }

export default function Index() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>The Index: UMass Yearbook</title>
      </Head>
      <Header />
      {/* <Helmet>
        <script defer src="script.js" type="text/javascript"></script>
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.js"
        ></script>
        <script
          defer
          src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"
        ></script>
      </Helmet> */}
      <main>
        <Hero />
        <History />
        <Gallery />
        <MoreInfo />
        <Motivation />
        <Order />
      </main>
      <Footer />
    </div>
  );
}
