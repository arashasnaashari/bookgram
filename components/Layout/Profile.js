import { useState, useContext } from "react";
import Form from "./Form";
import useUser from "../../utils/useUser";
import { useRouter } from "next/router";
import Popup from "reactjs-popup";
const Compo = () => {
  const [menu, Open] = useState(false);
  const [username, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLogin, setisLogin] = useState(true);
  const [phone, setphone] = useState("");
  const [password, setPass] = useState("");
  const [err, setErr] = useState(null);
  const { user, mutateUser } = useUser();
  const router = useRouter();
  return (
    <>
      <div className="relative inline-block text-right">
        {!user?.isLoggedIn && <Form />}
        {user?.isLoggedIn && (
          <>
            <div
              onClick={() => {
                Open(!menu);
              }}
            >
              {user?.isLoggedIn && (
                <div
                  className="w-10 lg:w-30 h-20 lg:h-30 bg-contain bg-no-repeat bg-center mx-auto"
                  style={{ backgroundImage: `url(${user?.profileURL})` }}
                  onClick={() => Open((p) => !p)}
                ></div>
              )}
              {!user?.isLoggedIn && (
                <div className="w-10">
                  <svg
                    className="stroke-current text-gray-700 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              )}
            </div>
            {menu && (
              <div
                id="modal_login"
                className="origin-top-right absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 z-40"
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
                    fetch("http://localhost:3000/api/logout");
                    router.push("/");
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
          </>
        )}
      </div>
    </>
  );
};
export default Compo;
