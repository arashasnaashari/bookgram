import Menu from "../../components/DashBoard/Index/Menu";
import Nav from "../../components/DashBoard/Index/Nav";
import React, { useState, useEffect, useContext } from "react";
import dbConnect from "../../utils/dbConnect";
import Reader from "../../model/reader";
import Book from "../../model/Book";
import withSession from "../../utils/session";

const Compare = ({ data1, user }) => {
  const [username, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLogin, setisLogin] = useState(true);
  const [phone, setphone] = useState("");
  const [password, setPass] = useState("");
  const [err, setErr] = useState(null);
  async function handleSubmit(event) {
    event.preventDefault();
    console.log("s");
  }
  return (
    <div className="bg-gray-50 font-Vazir dark:bg-gray-900 mb-52 dashboard_zoom">
      <div className="bg-gray-50 font-Vazir dark:bg-gray-900 pb-96">
        <Nav image={user.profileURL} username={user.username} />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-9" style={{ direction: "rtl" }}>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col p-2 content-center tems-center w-3/4 mx-auto"
            >
              <div className="bg-white border-2 border-gray-100 dark:border-gray-700 rounded-md p-6 flex-col flex dark:bg-gray-800 mb-10">
                <h1 className="dark:text-white mb-3 text-xl">اطلاعات #1</h1>
                <input
                  onChange={(event) => setphone(event.target.value)}
                  placeholder="شماره همراه"
                  type="text"
                  className="p-2 bg-gray-100 rounded-md mb-2 w-11/12 dark:bg-gray-700"
                />
                <input
                  onChange={(event) => setUser(event.target.value)}
                  placeholder="نام"
                  type="text"
                  className="p-2 bg-gray-100 rounded-md mb-2 w-11/12 dark:bg-gray-700"
                />

                <input
                  onChange={(event) => setPass(event.target.value)}
                  placeholder="رمز عبور"
                  type="text"
                  className="p-2 bg-gray-100 rounded-md mb-2 w-11/12 dark:bg-gray-700"
                />
              </div>
              <div className="bg-white border-2 border-gray-100 dark:border-gray-700 rounded-md p-6 flex-col flex dark:bg-gray-800 mb-10">
                <h1 className="dark:text-white mb-3 text-xl">اطلاعات #2</h1>
                <input
                  onChange={(event) => setphone(event.target.value)}
                  placeholder="شماره همراه"
                  type="text"
                  className="p-2 bg-gray-100 rounded-md mb-2 w-11/12 dark:bg-gray-700"
                />
                <input
                  onChange={(event) => setUser(event.target.value)}
                  placeholder="نام"
                  type="text"
                  className="p-2 bg-gray-100 rounded-md mb-2 w-11/12 dark:bg-gray-700"
                />

                <input
                  onChange={(event) => setPass(event.target.value)}
                  placeholder="رمز عبور"
                  type="text"
                  className="p-2 bg-gray-100 rounded-md mb-2 w-11/12 dark:bg-gray-700"
                />
              </div>

              <div className="bg-white border-2 border-gray-100 dark:border-gray-700 rounded-md p-6 flex-col flex dark:bg-gray-800 mb-10">
                <h1 className="dark:text-white mb-3 text-xl">اطلاعات #3</h1>
                <input
                  onChange={(event) => setphone(event.target.value)}
                  placeholder="شماره همراه"
                  type="text"
                  className="p-2 bg-gray-100 rounded-md mb-2 w-11/12 dark:bg-gray-700"
                />
                <input
                  onChange={(event) => setUser(event.target.value)}
                  placeholder="نام"
                  type="text"
                  className="p-2 bg-gray-100 rounded-md mb-2 w-11/12 dark:bg-gray-700"
                />

                <input
                  onChange={(event) => setPass(event.target.value)}
                  placeholder="رمز عبور"
                  type="text"
                  className="p-2 bg-gray-100 rounded-md mb-2 w-11/12 dark:bg-gray-700"
                />
              </div>

              <div className="bg-white border-2 border-gray-100 dark:border-gray-700 rounded-md p-6 flex-col flex dark:bg-gray-800 mb-10">
                <h1 className="dark:text-white mb-3 text-xl">اطلاعات #4</h1>
                <input
                  onChange={(event) => setphone(event.target.value)}
                  placeholder="شماره همراه"
                  type="text"
                  className="p-2 bg-gray-100 rounded-md mb-2 w-11/12 dark:bg-gray-700"
                />
                <input
                  onChange={(event) => setUser(event.target.value)}
                  placeholder="نام"
                  type="text"
                  className="p-2 bg-gray-100 rounded-md mb-2 w-11/12 dark:bg-gray-700"
                />

                <input
                  onChange={(event) => setPass(event.target.value)}
                  placeholder="رمز عبور"
                  type="text"
                  className="p-2 bg-gray-100 rounded-md mb-2 w-11/12 dark:bg-gray-700"
                />
              </div>

              <button
                type="submit"
                className="bg-black p-2 w-11/12 rounded-md text-white mx-auto dark:bg-bookgram-sabz"
              >
                ثبت
              </button>

              {err && <span>{err}</span>}
            </form>
          </div>

          <div className="lg:col-span-3">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
};
export const getServerSideProps = withSession(async function ({ req, res }) {
  await dbConnect();
  const user = req.session.get("user");
  if (!user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const usero = await Reader.find({ userId: user.userId })
    .sort({ date: -1 })
    .populate({
      path: "book",
      options: {
        select: { title: 1, image: 1 },
      },
    })
    .lean();
  return {
    props: { data1: JSON.stringify(usero), user: user },
  };
});

export default Compare;
// https://github.com/bradtraversy/reactcharts/blob/master/src/components/Chart.js
// https://github.com/apexcharts/react-apexcharts#how-do-i-update-the-chart
// https://apexcharts.com/docs/update-charts-from-json-api-ajax/
// https://github.com/eipex2/nivo-nextjs/tree/master/pages
// https://pusher.com/tutorials/realtime-data-visualization-nextjs
