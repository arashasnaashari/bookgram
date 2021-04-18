// import "swiper/swiper-bundle.min.css";
import "keen-slider/keen-slider.min.css";
import "../styles/globals.css";
import Contx from "../context/auth-context";
import { useState, useEffect, useContext } from "react";
import ReactNotification from "react-notifications-component";
import Head from "next/head";

import "react-notifications-component/dist/theme.css";

// import "../styles/app.css";
function MyApp({ Component, pageProps }) {
  const [model, useModel] = useState(false);
  const Modeling = () => {
    useModel(true);
  };
  const Clozing = () => {
    useModel(false);
  };
  if (typeof window !== "undefined") {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "35a6cabe-2b02-430b-83f5-052512dee25d";
    (function () {
      d = document;
      s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  }
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>bookgram</title>
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>

      <Contx.Provider
        value={{
          setModel: Modeling,
          clozeModal: Clozing,
          modal: model,
        }}
      >
        <ReactNotification />
        <Component {...pageProps} />
      </Contx.Provider>
    </>
  );
}

export default MyApp;
// import { store } from "react-notifications-component";
// store.addNotification({
//   content: (
//     <div className="bg-red-500 p-4 w-full text-right h-36 shadow-2xl font-IranianSans rounded-lg text-white">
//       <h1>ساختگی سادگی بساز</h1>
//     </div>
//   ),
//   type: "danger",
//   insert: "top",
//   container: "top-left",
//   animationIn: ["animate__animated", "animate__fadeIn"],
//   animationOut: ["animate__animated", "animate__fadeOut"],
//   dismiss: {
//     duration: 1000,
//   },
// });
