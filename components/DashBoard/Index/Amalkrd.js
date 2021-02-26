import dynamic from "next/dynamic";
const Chart = dynamic(
  () => {
    return import("react-apexcharts");
  },
  { ssr: false }
);
import React, { useState, useEffect, useContext } from "react";
const Compo = () => {
  const [options, setOpt] = useState("");
  const [series, setSeri] = useState("");
  let chart = () => {
    setOpt({
      chart: {
        type: "radialBar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: 0,
          endAngle: 360,
          hollow: {
            margin: 0,
            size: "60%",
            background: "#fff",
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: "front",
          },

          dataLabels: {
            show: true,
            name: {
              offsetY: 0,
              show: true,
              color: "#888",
              fontSize: "100%",
            },
            value: {
              formatter: function (val) {
                return parseInt(val);
              },
              color: "#111",
              fontSize: "140%",
              show: true,
            },
          },
        },
      },
      fill: {
        colors: ["#17e327"],
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["p/day"],
    });

    setSeri([50]);
  };
  useEffect(() => {
    chart();
  }, []);
  return (
    <>
      <div className="flex flex-row-reverse lg:flex-col lg:h-full bg-white shadow-sm rounded-xl justify-start border-gray-200 border-2 dark:bg-gray-800 dark:border-gray-500">
        <div className="w-full">
          <div className="">
            <Chart options={options} series={series} type="radialBar" />
          </div>
        </div>
        <div className="flex-col flex-nowrap items-center align-middle w-1/2 lg:w-full">
          <div className="flex flex-row justify-around bg-gray-50 lg:bg-white p-4">
            <div style={{ direction: "rtl" }}>
              <span>این ماه</span>
              <h1 className="text-sm text-bookgram-yellow">
                <span className="text-xs text-bookgram-green">8.7%+</span> 2300P
              </h1>
            </div>
            <div style={{ direction: "rtl" }}>
              <span>این ماه</span>
              <h1 className="text-sm text-bookgram-yellow">
                <span className="text-xs text-bookgram-green">8.7%+</span> 2300P
              </h1>
            </div>
          </div>
          <div
            className="flex flex-col bg-gray-100 lg:bg-white text-xs"
            style={{ direction: "rtl" }}
          >
            <div className="flex flex-row justify-around p-10">
              <div>سرعت خواندن</div>
              <div>دانش</div>
            </div>
            <div className="flex flex-row justify-around p-10">
              {" "}
              <div>واژگان</div>
              <div>تمرکز</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Compo;
