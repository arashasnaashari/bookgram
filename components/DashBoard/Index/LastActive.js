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
          colors: ["transparent", "transparent", "transparent"],
        },
        column: {
          colors: ["transparent", "transparent", "transparent"],
        },
      },
      chart: {
        height: 200,
        type: "line",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      stroke: {
        curve: "smooth",
      },
      yaxis: {
        labels: {
          formatter: function (val, index) {
            return Math.round(val);
          },
        },
      },
      xaxis: {
        categories: dataInfoDate,
      },
    });

    setSeri([
      {
        data: arrayPage,
      },
    ]);
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row justify-between font-Vazir lg:text-xs">
        <div className="flex flex-col-reverse lg:flex-col lg:w-1/2">
          <div className="w-full h-96 lg:h-auto">
            <div className="w-full">
              <Chart
                options={options}
                series={series}
                type="line"
                width="100%"
                height=""
              />
            </div>
          </div>
          <div
            className="flex flex-row justify-around rounded-xl text-lg lg:text-xs
h-48 lg:16"
          >
            <div
              className="flex flex-col bg-gray-100 w-1/2 mx-3 p-3"
              style={{ direction: "rtl" }}
            >
              <div className="mb-3">کتاب درحال خواندن</div>
              <div className="mb-0">خوانده شده</div>
              <div className="mb-3">24%</div>
              <div className="mb-0">باقی مانده</div>
              <div className="">76%</div>
            </div>
            <div
              className="flex flex-col border rounded-xl w-1/2 mx-3 p-3"
              style={{ direction: "rtl" }}
            >
              <div className="mb-3"> صفحات خوانده شده :</div>
              <div className="mb-3">در یک روز</div>
              <div
                className="mb-3"
                style={{
                  width: "100%",
                  height: "4px",
                  backgroundColor: "lightgray",
                }}
              >
                <div
                  style={{
                    width: "27%",
                    height: "4px",
                    backgroundColor: "orange",
                  }}
                ></div>
              </div>
              <div className="mb-3">میانگین روزانه</div>
              <div
                className=""
                style={{
                  width: "100%",
                  height: "4px",
                  backgroundColor: "lightgray",
                }}
              >
                <div
                  style={{
                    width: "60%",
                    height: "4px",
                    backgroundColor: "#33cc40",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-96 w-3/4 mb-10 mx-auto lg:w-1/2">
          <div
            className="w-full h-full bg-cover bg-no-repeat mx-auto"
            style={{ backgroundImage: `url(/img/latest-read.png)` }}
          ></div>
        </div>
      </div>
    </>
  );
};
export default Compo;
//<div className="w-3/4 mx-auto">
{
  /* <Chart options={options} series={series} type="bar" width="100%" />
               
</div> */
}
