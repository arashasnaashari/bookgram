import Search from "../../components/DashBoard/compare/Search";
import Nav from "../../components/DashBoard/Index/Nav";
import Menu from "../../components/DashBoard/Index/Menu";
import React, { useState, useEffect, useContext } from "react";
import dynamic from "next/dynamic";
import dbConnect from "../../utils/dbConnect";
import Reader from "../../model/reader";
import Book from "../../model/Book";
import withSession from "../../utils/session";
const Chart = dynamic(
  () => {
    return import("react-apexcharts");
  },
  { ssr: false }
);
const Compare = ({ data1, user }) => {
  //one book
  const dataInfo = JSON.parse(data1)[0].pages;
  const dataInfoDate = JSON.parse(data1)[0].date.map((r) => {
    return ToFarsi(r).weekday;
  });

  ///  all in one
  const ddddd = [];
  const X = JSON.parse(data1).map((dd) => {
    return dd.date.map((e) => {
      return ddddd.push(ToFarsi(e).weekday + ToFarsi(e).day);
    });
  });
  const pppppp = [];
  const Y = JSON.parse(data1).map((dd) => {
    return dd.pages.map((e) => {
      return pppppp.push(e);
    });
  });
  const aaaaar = [];
  for (let i = 0; i < ddddd.length; i++) {
    aaaaar.push({ date: ddddd[i], second: pppppp[i] });
  }

  aaaaar.sort((a, b) => {
    return new Date(a.time) - new Date(b.time);
  });
  console.log(aaaaar);

  //TO FARSI
  function ToFarsi(d) {
    return Object.fromEntries(
      new Intl.DateTimeFormat("fa", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
        .formatToParts(new Date(d))
        .map((item) => [item.type, item.value])
    );
  }

  // PAGE cuontr
  const arrayPage = [];
  for (let i = 0; i < dataInfo.length; i++) {
    arrayPage.push(dataInfo[i] - dataInfo[i - 1]);
    arrayPage[0] = dataInfo[0];
  }

  const [dataChart, setData] = useState("");
  const [options, setOpt] = useState("");
  const [series, setSeri] = useState("");

  let chart = () => {
    setOpt({
      colors: ["#8efac2", "#5996cf", "#9C27B0"],
      fill: {
        colors: ["#8efac2", "#5996cf", "#9C27B0"],
      },
      dataLabels: {
        style: {
          colors: ["#8efac2", "#5996cf", "#9C27B0"],
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
        height: 200,
        type: "line",
        zoom: {
          enabled: true,
        },
      },
      noData: {
        text: "Loading...",
      },

      xaxis: {
        categories: aaaaar.map((ee) => {
          return ee.date;
        }),
      },
      yaxis: {
        labels: {
          formatter: function (val, index) {
            return Math.round(val);
          },
        },
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return " " + val + " ساعت";
          },
        },
      },
    });

    setSeri([
      {
        data: aaaaar.map((ee) => {
          return ee.second;
        }),
        name: "1",
      },
      {
        data: aaaaar.map((ee) => {
          return ee.second - 10;
        }),
        name: "2",
      },
    ]);
  };
  const handleUpdate = (e) => {
    e.preventDefault();

    setSeri((prev) => [
      ...prev,
      {
        data: [43, 5, 37, 1],
      },
    ]);
  };
  useEffect(() => {
    chart();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-gray-50 mb-52 dashboard_zoom">
      <Nav image={user.profileURL} username={user.username} />
      <Menu row={true} />
      <Search />
      <div className="w-full mx-auto mb-20 h-96">
        <Chart options={options} series={series} type="line" height="100%" />
      </div>
      <button onClick={handleUpdate}>Update</button>
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
  let dataaaa;
  if (usero.length > 0) {
    dataaaa = usero;
  } else {
    dataaaa = [
      {
        date: [0],
        time: [0],
        pages: [0],
      },
    ];
  }
  return {
    props: { data1: JSON.stringify(dataaaa), user: user },
  };
});

export default Compare;
// https://github.com/bradtraversy/reactcharts/blob/master/src/components/Chart.js
// https://github.com/apexcharts/react-apexcharts#how-do-i-update-the-chart
// https://apexcharts.com/docs/update-charts-from-json-api-ajax/
// https://github.com/eipex2/nivo-nextjs/tree/master/pages
// https://pusher.com/tutorials/realtime-data-visualization-nextjs
