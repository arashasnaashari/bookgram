import Search from "./Search";
import Nav from "./Nav";
import Categoury from "./Categoury";
import Profile from "./Profile";
import Dark from "./Dark";
const Header = () => {
  return (
    <div style={{ direction: "rtl" }}>
      <div className="grid grid-cols-9 gap-3 m-2 md:grid-flow-col md:grid-cols-12">
        <div className="col-span-3 md:col-span-3">
          <div className="flex items-center h-28 justify-start ">
            <div className="md:ml-6">
              <Dark />
            </div>
            <div className="md:ml-6">
              <Profile />
            </div>
          </div>
        </div>
        <div className="md:col-span-9 col-span-4">
          <div className="flex items-center h-28 ">
            <Search />
          </div>
        </div>
        <div className="col-span-2 md:col-span-3">
          <div className="flex items-center h-32 justify-end">
            <a href="/">
              <img src="/vercel.svg" className="w-16"></img>
            </a>
          </div>
        </div>
      </div>
      <Nav />
    </div>
  );
};
export default Header;
