import { useState } from "react";
import { useRouter } from "next/router";
import Dark from "../../Layout/Dark";
const Compo = () => {
  const [text, setText] = useState("");
  const router = useRouter();
  const handleSearch = async (e) => {
    e.preventDefault();
    console.log("d");
  };
  return (
      <div className="flex flex-row-reverse items-center font-IranianSans justify-start p-8">
       <h1 className="text-2x ml-2"> جدول تطبیق</h1>
      <div className="relative w-1/2" style={{direction:"rtl"}}> 
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <button
            type="submit"
            className="p-1 focus:outline-none focus:shadow-outline"
            onClick={handleSearch}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </span>
        <form onSubmit={handleSearch}>
          <input
            type="search"
            name="q"
            onChange={(t) => setText(t.target.value)}
            className="bg-bookgram-search py-2 text-sm pl-10 focus:outline-none w-full h-12 placeholder-bookgram-menu font-IranianSans"
            placeholder="جستوجو از بین دنبال شوندگان ...."
          />
        </form>
      </div>
    </div>
  );
};
export default Compo;
