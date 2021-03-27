import Popup from "reactjs-popup";
import { useState, useContext } from "react";
import StarRatings from "react-star-ratings";
import { useRouter } from "next/router";
import Contx from "../context/auth-context";

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
          router.push("/blog/create");
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
            <h1 className="text-2xl font-bold font-IranianSans">شروع کنیم</h1>
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
    </>
  );
};

export default Com;
