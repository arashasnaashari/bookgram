const Compo = ({ row }) => {
  return (
    <>
      {row && (
        <div
          style={{ direction: "rtl", overflowX: "hidden" }}
          className=" font-IranianSans flex flex-row lg:flex-row lg:h-full align-middle text-center bg-white shadow-sm rounded-lg border-gray-100 border-2 dark:bg-gray-800 dark:text-gray-100 flex-nowrap fixed justify-around lg:justify-start bottom-0 w-full lg:w-auto mx-auto left-0 md:static  dark:border-gray-800 text-sm lg:text-lg"
        >
          <div className="hover:bg-opacity-30 mx-auto w-full py-7 hover:bg-gray-100 dark:hover:text-white ">
            <a href="/dashboard">دشبورد</a>
          </div>
          <div className="hover:bg-opacity-30 mx-auto w-full py-7 hover:bg-gray-100 dark:hover:text-white  ">
            <a href="/dashboard/library">کتابخانه</a>
          </div>
          <div className="hover:bg-opacity-30 mx-auto w-full py-7 hover:bg-gray-100 dark:hover:text-white ">
            <a href="/dashboard/compare">تطبیق</a>
          </div>
          <div className="hover:bg-opacity-30 mx-auto w-full py-7 hover:bg-gray-100 dark:hover:text-white ">
            <a href="/dashboard/charts">نمودار</a>
          </div>
          <div className="hover:bg-opacity-30 mx-auto w-full py-7 hover:bg-gray-100 dark:hover:text-white ">
            <a href="/dashboard/setting">تنظیمات</a>
          </div>
        </div>
      )}
      {!row && (
        <div
          style={{ direction: "rtl", overflowX: "hidden" }}
          className=" font-IranianSans flex flex-row lg:flex-col lg:h-full align-middle text-center bg-white shadow-sm rounded-lg border-gray-100 border-2 dark:bg-gray-800 dark:text-gray-100 flex-nowrap fixed justify-around lg:justify-start bottom-0 w-full lg:w-auto mx-auto left-0 md:static divide-y divide-gray-200 dark:divide-gray-600 dark:border-gray-800 text-sm lg:text-lg"
        >
          <div className="hover:bg-opacity-30 mx-auto w-full py-7 hover:bg-gray-100 dark:hover:text-white flex flex-row-reverse justify-around lg:justify-end lg:pr-3 items-center">
            <a href="/dashboard" className="mr-3">
              دشبورد
            </a>
            <div className="w-8 hidden lg:block ">
              <svg
                className="stroke-current dark:text-gray-100 "
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
          </div>
          <div className="hover:bg-opacity-30 mx-auto w-full py-7 hover:bg-gray-100 dark:hover:text-white flex flex-row-reverse justify-around lg:justify-end lg:pr-3 items-center">
            <a href="/dashboard/library" className="mr-3">
              کتابخانه من
            </a>
            <div className="w-8 hidden lg:block ">
              <svg
                className="stroke-current dark:text-gray-100 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
          </div>
          <div className="hover:bg-opacity-30 mx-auto w-full py-7 hover:bg-gray-100 dark:hover:text-white flex flex-row-reverse justify-around lg:justify-end lg:pr-3 items-center">
            <a href="/dashboard/compare" className="mr-3">
              تطبیق
            </a>
            <div className="w-8 hidden lg:block ">
              <svg
                className="stroke-current dark:text-gray-100 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </div>
          </div>
          <div className="hover:bg-opacity-30 mx-auto w-full py-7 hover:bg-gray-100 dark:hover:text-white flex flex-row-reverse justify-around lg:justify-end lg:pr-3 items-center">
            <a href="/dashboard/charts" className="mr-3">
              نمودار
            </a>
            <div className="w-8 hidden lg:block ">
              <svg
                className="stroke-current dark:text-gray-100 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
          <div className="hover:bg-opacity-30 mx-auto w-full py-7 hover:bg-gray-100 dark:hover:text-white flex flex-row-reverse justify-around lg:justify-end lg:pr-3 items-center">
            <a href="/dashboard/setting" className="mr-3">
              تنظیمات
            </a>
            <div className="w-8 hidden lg:block ">
              <svg
                className="stroke-current dark:text-gray-100 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      )}{" "}
    </>
  );
};
export default Compo;
