import dynamic from "next/dynamic";
const Chart = dynamic(
  () => {
    return import("react-apexcharts");
  },
  { ssr: false }
);
import React, { useState, useEffect, useContext } from "react";

const Compo = ({ data }) => {
  const dataInfo = data[0].pages;
  const dataInfoDate = data[0].date.map((r) => {
    return ToFarsi(r).weekday;
  });
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
          formatter: function(val, index) {
            return Math.round(val);
          }
        }
      },
      xaxis: {
        categories: dataInfoDate,
      },
    });

    setSeri([
      {
        data: arrayPage,
        name: "این ماه",
      },
    ]);
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <>
      <div className="w-full mx-auto h-96 rounded-md border-gray-200 border-2 dark:bg-gray-800 dark:border-gray-500">
        <Chart options={options} series={series} type="bar" />
        {/* <button onClick={handleUpdate}>Update</button> */}
        <div className="text-center bg-bookgram-yellow rounded-md border-gray-200 border-2 py-1">
          <a href="/dashboard/charts">جزئیات را ببینید</a>
        </div>
      </div>
    </>
  );
};
export default Compo;
