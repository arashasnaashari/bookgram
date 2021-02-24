// import { Line } from "react-chartjs-2";
import React, { useState, useEffect, useContext } from "react";
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
      colors: ["#17e327", "#E91E63", "#9C27B0"],
      fill: {
        colors: ["#17e327", "#E91E63", "#9C27B0"],
      },
      dataLabels: {
        style: {
          colors: ["#17e327", "#E91E63", "#9C27B0"],
        },
      },

      grid: {
        row: {
          colors: ["white", "transparent", "white"],
        },
        column: {
          colors: ["white", "white", "white"],
        },
      },
      chart: {
        height: 200,
        type: "line",
        zoom: {
          enabled: false,
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
        name: "XYZ MOTORS",
      },
      {
        data: aaaaar.map((ee) => {
          return ee.second - 10;
        }),
        name: "XYZ MOTORS",
      },
      {
        data: aaaaar.map((ee) => {
          return ee.second - 5;
        }),
        name: "XYZ MOTORS",
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
    <>
      <div className="w-3/4 md:w-full">
        <Chart options={options} series={series} type="line" />
      </div>
      <button onClick={handleUpdate}>Update</button>
    </>
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
