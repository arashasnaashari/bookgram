import Dark from "../../Layout/Dark";
import { useState, useContext } from "react";

const Compo = () => {
  const [menu, Open] = useState(false);
  return (
    <div className="bg-white">
      <div className="flex flex-row-reverse justify-between flex-nowrap items-center dark:text-gray-50 ">
        <div className=" p-4 flex flex-row-reverse flex-nowrap items-center justify-between">
          <div>
            <div
              className="w-20 lg:w-30 h-20 lg:h-30 bg-contain bg-no-repeat bg-center mx-auto"
              style={{ backgroundImage: `url(/img/user-blog.png)` }}
              onClick={() => Open(p => !p)}
            ></div>
            {menu && (
              <div
                id="modal_login"
                className="origin-top-right absolute right-35 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
              >
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    تنظیمات
                  </a>
                </div>
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    داشبورد
                  </a>
                </div>

                <div
                  className="py-1"
                  onClick={() => {
                    context.logout();
                  }}
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    خروج
                  </a>
                </div>
              </div>
            )}
          </div>
          <div className="mx-3">نام کاربری</div>
          <div></div>
        </div>
        <div className="flex">
          <Dark />
          <button className="w-20 text-center align-middle">
            <div
              className="w-20 h-20 bg-contain bg-no-repeat bg-center mx-auto mt-5"
              style={{ backgroundImage: `url(/vercel.svg)` }}
            ></div>
          </button>
        </div>
      </div>

      <div
        style={{ direction: "rtl", overflowX: "hidden" }}
        className="flex flex-row align-middle text-center bg-white  dark:bg-gray-800 dark:text-gray-100 flex-nowrap fixed justify-around md:justify-start bottom-0 w-full md:w-auto mx-auto left-0 md:static divide-y divide-gray-100 z-20"
      >
        <div className="mx-auto w-full py-7 hover:bg-gray-100 dark:hover:text-black">
          دشبورد
        </div>
        <div className="mx-auto w-full py-7 hover:bg-gray-100 dark:hover:text-black">
          کتابخانه
        </div>
        <div className="mx-auto w-full py-7 hover:bg-gray-100 dark:hover:text-black">
          تطبیق
        </div>
        <div className="mx-auto w-full py-7 hover:bg-gray-100 dark:hover:text-black">
          نمودار
        </div>
        <div className="mx-auto w-full py-7 hover:bg-gray-100 dark:hover:text-black">
          تنظیمات
        </div>
      </div>
    </div>
  );
};

export default Compo;
