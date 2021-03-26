import Popup from "reactjs-popup";
import { useState, useContext } from "react";
import StarRatings from "react-star-ratings";
import { useRouter } from "next/router";
import Contx from "../../context/auth-context";

const Com = ({ shouldshow }) => {
  const router = useRouter();

  const [menu, Open] = useState(false);
  const [username, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLogin, setisLogin] = useState(true);
  const [phone, setphone] = useState("");
  const [password, setPass] = useState("");
  const [err, setErr] = useState(null);
  async function handleSubmit(event) {
    event.preventDefault();
    console.log("s");
    setErr(null);
    if (isLogin == false) {
      //signUp
      const body = {
        username: username,
        phone: phone,
        password: password,
      };
      try {
        setLoading(true);
        const res = await fetch("https://bookgram.vercel.app/api/signin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        const data = await res.json();
        if (data.sign == true) {
          setLoading(false);

          setisLogin(!isLogin);
        } else {
          setLoading(false);

          setErr(data.msg);
        }
      } catch (error) {
        console.log(error);
      }
    }
    if (isLogin == true) {
      try {
        setLoading(true);
        const res = await fetch("https://bookgram.vercel.app/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password, phone }),
        });
        const data = await res.json();
        if (data.sign == true) {
          setLoading(false);
          router.reload();
          // context.login(data.token, data.userId, data.username, "profile");
        } else {
          setLoading(false);
          setErr("اروری اتفاق افتاد  رفرش کنید");
        }
      } catch (error) {
        console.log("error " + error);
      }
    }
  }
  const [open, setOpen] = useState(false);
  // const closeModal = () => setOpen(false);
  const cntx = useContext(Contx);
  return (
    <>
      <span
        onClick={() => {
          setOpen(true);
          cntx.setModel();
          console.log(open);
        }}
      >
        <div>
          {shouldshow == "dashboard" && (
            <h1 className="text-center text-6xl bg-red-500">
              !!! اول باید ثبت نام کنی{" "}
            </h1>
          )}
          {shouldshow == "form" && (
            <form className="flex flex-col w-3/4 my-6 md:w-1/2">
              <textarea
                rows="4"
                cols="50"
                maxLength="50"
                placeholder="نظر خود رو بنویس .... "
                className="border-2 border-gray-300 rounded-md my-3 focus:outline-none bg-gray-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-500 font-Vazir"
              ></textarea>
              <button
                type="submit"
                className="bg-gray-100 p-3 rounded-sm dark:bg-gray-600 dark:text-gray-200 hover:bg-opacity-30 font-Vazir"
              >
                ارسال
              </button>
            </form>
          )}
          {shouldshow == "reply" && <h1>reply {` >>`}</h1>}
          {shouldshow == "star" && (
            <StarRatings
              ignoreInlineStyles={false}
              starDimension="20px"
              starRatedColor="gold"
              numberOfStars={5}
              name="rating"
              starHoverColor="yellow"
            />
          )}
          {!shouldshow && (
            <div className="w-10">
              <svg
                className="stroke-current text-gray-700 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </div>
          )}
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
            className="rounded-2xl"
            style={{
              margin: "0 auto",
              direction: "rtl",
              width: "80vw",
              height: "90vh",
              backgroundColor: "#eb9860",
              display: "flex",
              flexFlow: "row",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <div className="flex flex-row justify-center md:justify-between bg-white rounded-2xl h-4/5 w-4/5">
              <div className="flex flex-col p-2 content-center pt-12 md:w-2/5">
                <h1 className="text-2xl font-bold font-IranianSans">
                  شروع کنیم
                </h1>
                {!isLogin ? (
                  <>
                    <span className="text-sm my-3 text-gray-400 font-IranianSans">
                      حساب کاربری دارید؟{" "}
                      <a
                        className="font-bold underline text-black"
                        onClick={() => setisLogin(!isLogin)}
                      >
                        ورود
                      </a>
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-sm my-3 text-gray-400 font-IranianSans">
                      حساب کاربری ندارید؟{" "}
                      <a
                        className="font-bold underline text-black"
                        onClick={() => setisLogin(!isLogin)}
                      >
                        ثبت نام
                      </a>
                    </span>
                  </>
                )}
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col p-2 content-center tems-center bg-white"
                >
                  <label className="font-IranianSans text-sm text-gray-500">
                    شماره همراه
                  </label>
                  <input
                    onChange={(event) => setphone(event.target.value)}
                    type="text"
                    className="w-4/5 font-IranianSans p-2 border-b-2 border-gray-400 mb-2 focus:outline-none"
                  />
                  {!isLogin && (
                    <>
                      <label className="font-IranianSans text-sm text-gray-500">
                        نام
                      </label>
                      <input
                        onChange={(event) => setUser(event.target.value)}
                        type="text"
                        className="w-4/5 font-IranianSans p-2 border-b-2 border-gray-400 mb-2 focus:outline-none"
                      />
                    </>
                  )}
                  <label className="font-IranianSans text-sm text-gray-500">
                    رمز عبور
                  </label>
                  <input
                    onChange={(event) => setPass(event.target.value)}
                    type="text"
                    className="w-4/5 font-IranianSans p-2 border-b-2 border-gray-400 mb-2 focus:outline-none"
                  />
                  {!loading && (
                    <button
                      type="submit"
                      className=" font-IranianSans  bg-gray-700 p-2 w-4/5 mt-2 rounded-xl text-white"
                    >
                      ثبت
                    </button>
                  )}
                  {loading && (
                    <button
                      type="submit"
                      className=" font-IranianSans  bg-gray-400 p-2 w-4/5 mt-2 rounded-xl text-white"
                    >
                      ثبت
                    </button>
                  )}

                  {err && <span>{err}</span>}
                </form>
              </div>

              <div className="md:block hidden p-3 w-1/2">
                <div
                  style={{
                    backgroundImage: "url(/img/signup-image.png)",
                    width: "100%",
                    height: "100%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  className="rounded-2xl"
                ></div>
              </div>
            </div>
          </div>
        </Popup>
      </span>
    </>
  );
};

export default Com;
