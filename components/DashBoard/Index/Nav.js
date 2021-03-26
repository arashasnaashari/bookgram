import Dark from "../../../components/Layout/Dark";
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

const Compare = ({ image, username }) => {
  const [menu, Open] = useState(false);
  const router = useRouter();
  return (
    <div className="bg-gray-50 font-Vazir dark:bg-gray-900">
      <div className="flex flex-row-reverse justify-between flex-nowrap items-center dark:text-gray-50 ">
        <div className=" p-4 flex flex-row-reverse flex-nowrap items-center justify-between">
          <div>
            <div
              className="w-20 lg:w-30 h-20 lg:h-30 bg-contain bg-no-repeat bg-center mx-auto"
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => Open((p) => !p)}
            ></div>
            {menu && (
              <div
                id="modal_login"
                className="origin-top-right absolute mt-2 w-22 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 z-40"
                style={{ direction: "rtl" }}
              >
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 lg:hover: hover:text-gray-900"
                    role="menuitem"
                  >
                    {username}
                  </a>
                </div>
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 lg:hover: hover:text-gray-900"
                    role="menuitem"
                  >
                    تنظیمات
                  </a>
                </div>
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 lg:hover: hover:text-gray-900"
                    role="menuitem"
                  >
                    داشبورد
                  </a>
                </div>

                <div
                  className="py-1"
                  onClick={() => {
                    fetch("http://localhost:3000/api/logout");
                    router.push("/");
                  }}
                >
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 lg:hover: hover:text-gray-900"
                    role="menuitem"
                  >
                    خروج
                  </a>
                </div>
              </div>
            )}
          </div>
          <div>
            <button className="mr-10 text-white dark:bg-bookgram-sabz bg-black px-1 py-3 rounded-md hover:bg-opacity-50">
              <a href="/blog/create">نوشتن پست {"<<"} </a>
            </button>
          </div>
        </div>
        <div className="flex">
          <Dark />
          <button className="w-20 text-center align-middle focus:outline-none">
            <a href="/">
              <div
                className="w-20 h-20 bg-contain bg-no-repeat bg-center mx-auto mt-5"
                style={{ backgroundImage: `url(/vercel.svg)` }}
              ></div>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Compare;
// https://github.com/bradtraversy/reactcharts/blob/master/src/components/Chart.js
// https://github.com/apexcharts/react-apexcharts#how-do-i-update-the-chart
// https://apexcharts.com/docs/update-charts-from-json-api-ajax/
// https://github.com/eipex2/nivo-nextjs/tree/master/pages
// https://pusher.com/tutorials/realtime-data-visualization-nextjs
