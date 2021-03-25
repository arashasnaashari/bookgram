// import "swiper/swiper-bundle.min.css";
import "keen-slider/keen-slider.min.css";
import "../styles/globals.css";
import Contx from "../context/auth-context";
import { useState, useEffect, useContext } from "react";
import ReactNotification from "react-notifications-component";

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
  return (
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
