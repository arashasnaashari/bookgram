import Header from "./Header";
import Footer from "./Footer";
import Contxt from "../../context/auth-context";
import { useContext } from "react";
const Layout = (props) => {
  const cntx = useContext(Contxt);
  return (
    <>
      {cntx.modal ? (
        <div
          className="bg-white p-2 md:p-7 rounded-md dark:bg-gray-900"
          style={{ filter: "blur(4px)" }}
        >
          <Header />
          {props.children}
          {/* <Footer /> */}
        </div>
      ) : (
        <div className="bg-white p-2 md:px-7 rounded-2xl dark:bg-gray-900">
          <Header />
          {props.children}
          {/* <Footer /> */}
        </div>
      )}
    </>
  );
};

export default Layout;
