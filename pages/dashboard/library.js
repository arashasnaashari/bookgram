import Menu from "../../components/DashBoard/Index/Menu";
import Nav from "../../components/DashBoard/Index/Nav";
import React, { useState, useEffect, useContext } from "react";
import SearchBook from "../../components/Search/SearchBook";
import dbConnect from "../../utils/dbConnect";
import Reader from "../../model/reader";
import Book from "../../model/Book";
import withSession from "../../utils/session";
const Compare = ({ data1,user }) => {
  return (
    <div className="bg-gray-50 font-Vazir dark:bg-gray-900 mb-52 dashboard_zoom">
     <Nav image={user.profileURL} username={user.username} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-9">
          <div
            className="p-4 grid grid-cols-2 gap-4 md:h-72 bg-gradient-to-r from-gray-300 text-black  dark:text-gray-200 rounded-3xl h-72"
            style={{ direction: "rtl" }}
          >
            <div className="p-4 flex content-evenly flex-wrap">
              <h1 className="font-IranianSans text-xl md:text-4xl">
                یوال هرری: انسان خردمند: تاریخ مختصر بشر
              </h1>

              <button className="px-3 py-2 mt-3 bg-bookgram-btn text-white rounded-sm">
                ادامه خواندن
              </button>
            </div>
            <div className="flex justify-around items-center">
              <img
                src={`${JSON.parse(data1)[0].book.image}`}
                alt="s"
                className="h-1/2 md:h-auto"
                width="100"
              />
            </div>
          </div>

          <div className="flex justify-between p-3 mb-2">
            <div></div>
            <div>
              <h1 className="font-Vazir text-2xl font-bold dark:text-gray-100">
                محبوب ترین ها
              </h1>
            </div>
          </div>
          <div style={{ direction: "rtl" }}>
            <div className="flex flex-row flex-wrap p-5 justify-around">
              {JSON.parse(data1).map((e) => {
                return (
                  <SearchBook data={e.book} key={e._id} rate={e.star / e.nstar} />
                );
              })}
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <Menu />
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
