// import "swiper/swiper-bundle.min.css";
import "keen-slider/keen-slider.min.css";
import "../styles/globals.css";
import Contx from "../context/auth-context";
import { useState, useEffect, useContext } from "react";
import { model } from "mongoose";

// import "../styles/app.css";
function MyApp({ Component, pageProps }) {
  const [model, useModel] = useState(false);
  const Modeling = () => {
    useModel(true);
  };
  const Clozing = () => {
    useModel(false);
  };
  return (
    <Contx.Provider
      value={{
        setModel: Modeling,
        clozeModal: Clozing,
        modal: model,
      }}
    >
      <Component {...pageProps} />
    </Contx.Provider>
  );
}

export default MyApp;
