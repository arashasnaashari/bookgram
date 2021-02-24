import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => (
  <div className="bg-white p-2 md:p-7 rounded-md dark:bg-gray-900">
    <Header />
    {props.children}
    {/* <Footer /> */}
    
  </div>
);

export default Layout;
