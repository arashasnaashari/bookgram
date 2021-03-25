import { useState, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Popup from "reactjs-popup";
import Daste from "../category/index";
import Contx from "../../context/auth-context";
const Compo = () => {
  const router = useRouter();

  const cntx = useContext(Contx);
  const [open, setOpen] = useState(false);
  let home = false;
  let categour = false;
  let blog = false;
  let about = false;
  let dash = false;
  switch (router.asPath.split("/")[1]) {
    case "about":
      // about = true;
      break;
    case "category":
      categour = true;
      break;
    case "blog":
      blog = true;
      break;
    case "dashboard":
      dash = true;
      break;
    case "":
      home = true;
      break;
  }
  return (
    <>
      <div
        className="sm:text-lg z-40 flex flex-row flex-nowrap fixed justify-around md:justify-between bottom-0 h-14
      bg-bookgram text-gray-500 md:bg-white dark:bg-gray-800 md:text-bookgram-menu dark:text-gray-500
       md:dark:bg-gray-900 w-full left-0 rounded-md items-start font-Vazir md:w-3/4 xl:w-1/2 md:static md:pb-7 md:text-xl border-t-2 border-gray-900 md:border-0 text-xs text-center md:mx-auto font-semibold sm:h-20"
      >
        <a href="/">
          <a
            className={
              home
                ? `text-black md:text-gray-800 dark:text-white`
                : `md:hover:text-gray-800 md:dark:hover:text-white`
            }
          >
            <div className="w-8 md:hidden sm:w-11">
              <svg
                className={
                  home
                    ? `stroke-current text-black dark:text-white`
                    : `stroke-current text-gray-500 `
                }
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
            {home && (
              <div className="hidden md:block text-bookgram-badge bg-bookgram-badge rounded-full w-3 h-3 mx-auto mt-2"></div>
            )}
          </a>
        </a>
        <Link href="/about">
          <a
            className={
              about
                ? ` text-black md:text-gray-800 dark:text-white`
                : `md:hover:text-gray-800 md:dark:hover:text-white`
            }
          >
            <div className="w-8 md:hidden sm:w-11">
              <svg
                className={
                  about
                    ? `stroke-current text-black dark:text-white`
                    : `stroke-current text-gray-500 `
                }
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
            {about && (
              <div className="hidden md:block text-bookgram-badge bg-bookgram-badge rounded-full w-3 h-3 mx-auto mt-2"></div>
            )}
          </a>
        </Link>

        <div className=" flex items-center">
          <Link href="/category">
            <a
              className={
                categour
                  ? `text-black md:text-gray-800 dark:text-white`
                  : `md:hover:text-gray-800 md:dark:hover:text-white`
              }
            >
              <div className="w-8 md:hidden sm:w-11 mr-2">
                <svg
                  className={
                    categour
                      ? `stroke-current text-black dark:text-white`
                      : `stroke-current text-gray-500 `
                  }
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
              {categour && (
                <div className="hidden md:block text-bookgram-badge bg-bookgram-badge rounded-full w-3 h-3 mx-auto mt-2"></div>
              )}
            </a>
          </Link>

          <span
            onClick={() => {
              setOpen(true);
              cntx.setModel();
              console.log(open);
            }}
            className={categour ? `mb-3` : ""}
          >
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={
                  categour
                    ? `w-5 h-5 hidden md:block stroke-current text-black md:text-gray-800 dark:text-white`
                    : `w-5 h-5 hidden md:block stroke-current md:hover:text-gray-800 md:dark:hover:text-white`
                }
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <Popup
              open={open}
              onClose={() => {
                setOpen(false);
                cntx.clozeModal();
              }}
              modal
            >
              <div
                className="rounded-2xl bg-gray-400 bg-opacity-70 overflow-scroll "
                style={{
                  direction: "rtl",
                  width: "80vw",
                  height: "90vh",
                  display: "flex",
                  flexFlow: "row",
                  alignItems: "center",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <div className=" font-IranianSans flex justify-around flex-wrap pt-96 lg:pt-1">
                  <Daste />
                </div>
              </div>
            </Popup>
          </span>
        </div>
        <Link href="/dashboard">
          <a
            className={
              dash
                ? `text-black md:text-gray-800 dark:text-white`
                : `md:hover:text-gray-800 md:dark:hover:text-white`
            }
          >
            <div className="w-8 md:hidden sm:w-11">
              <svg
                className={
                  dash
                    ? `stroke-current text-black dark:text-white`
                    : `stroke-current text-gray-500 `
                }
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
            {dash && (
              <div className="hidden md:block text-bookgram-badge bg-bookgram-badge rounded-full w-3 h-3 mx-auto mt-2"></div>
            )}
          </a>
        </Link>

        <a
          href="/blog"
          className={
            blog
              ? `text-black md:text-gray-800 dark:text-white`
              : `md:hover:text-gray-800 md:dark:hover:text-white`
          }
        >
          <div className="w-8 md:hidden sm:w-11">
            <svg
              className={
                blog
                  ? `stroke-current text-black dark:text-white`
                  : `stroke-current text-gray-500 `
              }
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
          {blog && (
            <div className="hidden md:block text-bookgram-badge bg-bookgram-badge rounded-full w-3 h-3 mx-auto mt-2"></div>
          )}
        </a>
      </div>
    </>
  );
};

export default Compo;
