import { useState } from "react";

const Compo = () => {
  const [darkMode, setDarkMode] = useState(true);
  let localStorageVal;
  if (typeof window !== "undefined") {
    localStorageVal = localStorage.getItem("theme2");
  }
  const [mode, setMode] = useState(null || localStorageVal);
  if (typeof window !== "undefined") {
    if (localStorage.getItem("theme2") == "dark") {
      document.documentElement.classList.add("dark");
    } else if (localStorage.getItem("theme2") == "light") {
      document.documentElement.classList.remove("dark");
    }
  }
  return (
    <>
      <button
        className="text-aras dark:text-aras focus:outline-none"
        onClick={() => {
          if (typeof window !== "undefined") {
            if (mode == "dark") {
              localStorage.setItem("theme2", "light");
              setMode(localStorage.getItem("theme2"));
            } else {
              localStorage.setItem("theme2", "dark");
              setMode(localStorage.getItem("theme2"));
            }
          }
        }}
      >
        <div className="bg-bookgram-head border-gray-900 rounded-xl md:w-10 w-10">
          <svg
            className="fill-current text-gray-50"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </div>
      </button>
    </>
  );
};
export default Compo;
