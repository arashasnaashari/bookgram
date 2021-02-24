import { useState, useContext } from "react";

import Search from "./Search";
import Categoury from "./Categoury";
import Profile from "./Profile";
import Dark from "./Dark";

const Header = () => {
  // const OpenMenuPannel = () => {
  //   document.getElementById(
  //     "myDIV"
  //   ).parentElement.parentElement.style.transition = "all 1s";
  //   document.getElementById("myDIV").parentElement.parentElement.style.height =
  //     "1200px";
  //   setTimeout(() => {
  //     document.getElementById("dasteha").style.display = "block";
  //   }, 1100);
  // };
  return (
    <div style={{ direction: "rtl" }}>
      <div className="grid grid-cols-9 gap-3 m-2 md:grid-flow-col md:grid-cols-12">
        <div className="col-span-3 md:col-span-3">
          <div className="flex items-center h-28 justify-around">
            <Profile />
            <Dark />
          </div>
        </div>
        <div className=" md:col-span-9 col-span-4">
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

      <div
        className="sm:text-lg z-40 flex flex-row flex-nowrap fixed justify-around bottom-0 h-20 md:h-auto 
      bg-bookgram text-gray-900 md:bg-white dark:bg-gray-800 md:text-bookgram-menu dark:text-gray-500
       md:dark:bg-gray-900 w-full left-0 rounded-md items-center font-Vazir md:w-auto md:static md:pb-7 md:text-xl border-t-2 border-gray-900 md:border-0 text-xs text-center"
      >
        <a href="/" className="p-2 hover:text-gray-800 dark:hover:text-white">
          <div className="w-8 md:hidden sm:w-11">
            <svg
              className="stroke-current text-gray-500 dark:hover:text-gray-50"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </div>
          خانه
        </a>
        <a
          href="/blog"
          className="p-2 hover:text-gray-800 dark:hover:text-white"
        >
          <div className="w-8 md:hidden sm:w-11">
            <svg
              className="stroke-current text-gray-500 dark:hover:text-gray-50"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>
          بلاگ
        </a>
        <a
          href="/about"
          className="p-2 hover:text-gray-800 dark:hover:text-white"
        >
          <div className="w-8 md:hidden sm:w-11">
            <svg
              className="stroke-current text-gray-500 dark:hover:text-gray-50"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          درباره ما
        </a>
        <a
          href="/dashboard"
          className="p-2 hover:text-gray-800 dark:hover:text-white"
        >
          <div className="w-8 md:hidden sm:w-11">
            <svg
              className="stroke-current text-gray-500 dark:hover:text-gray-50"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          دشبورد
        </a>
        <a
          href="/category"
          className="p-2 hover:text-gray-800 dark:hover:text-white "
        >
          <div className="w-8 md:hidden sm:w-11 mr-2">
            <svg
              className="stroke-current text-gray-500 dark:hover:text-gray-50"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
          </div>
          دسته بندی
          {/* <button id="myDIV" onClick={() => OpenMenuPannel()}>
            دسته بندی
          </button> */}
        </a>
      </div>
      {/* <div
        id="dasteha"
        className="grid grid-cols-3 gap-4 mt-11"
      >
        {arrayOfDaste.map((e) => {
          return (
            <div className="">
              <img src={e.img} width="150" />
              <p className="px-14 text-xl font-IranianSans text-white">
                {e.text}
              </p>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};
export default Header;
