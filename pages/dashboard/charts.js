import dynamic from "next/dynamic";
const Chart = dynamic(
  () => {
    return import("react-apexcharts");
  },
  { ssr: false }
);
import dbConnect from "../../utils/dbConnect";
import Reader from "../../model/reader";
import Book from "../../model/Book";
import withSession from "../../utils/session";
import Menu from "../../components/DashBoard/Index/Menu";
import Nav from "../../components/DashBoard/Index/Nav";
import React, { useState, useEffect, useContext } from "react";
const Compare = ({ data1, user }) => {
  const [options, setOpt] = useState("");
  const [series, setSeri] = useState("");
  let chart = () => {
    setOpt({
      colors: ["#33cc40", "#05730e"],
      fill: {
        colors: ["#33cc40", "#05730e"],
      },
      dataLabels: {
        style: {
          colors: ["#33cc40", "#05730e"],
        },
      },

      grid: {
        row: {
          colors: ["transparent", "transparent", "transparent"],
        },
        column: {
          colors: ["transparent", "transparent", "transparent"],
        },
      },
      chart: {
        type: "line",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          formatter: function (val, index) {
            return Math.round(val);
          },
        },
      },
      xaxis: {
        categories: ["dataInfoDate"],
      },
    });

    setSeri([
      {
        data: ["arrayPage"],
        name: "این ماه",
      },
      {
        data: [9, 4, 3, 1],
        name: "ماه قبل",
      },
    ]);
  };
  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="bg-gray-50 font-Vazir dark:bg-gray-900 mb-52 dashboard_zoom">
     <Nav image={user.profileURL} username={user.username} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-9">
          <Chart options={options} series={series} type="bar" />
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
