import React from "react";
import { useKeenSlider } from "keen-slider/react";
import LetsCreate from "../../components/Blog/LetsCreate";

const Compo = (props) => {
  const [pause, setPause] = React.useState(false);
  const timer = React.useRef();
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 500,
    rtl: true,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
  });

  React.useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true);
    });
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false);
    });
  }, [sliderRef]);

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 2000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  return (
    <>
      <div className="p-4 mt-5 flex flex-col lg:flex-row-reverse justify-between lg:w-4/5 lg:m-auto">
        <div ref={sliderRef} className="keen-slider lg:w-2/3 w-full mb-3 ">
          <div className="keen-slider__slide number-slide1">
            <div
              className="bg-contain w-full h-full"
              style={{
                backgroundImage:
                  "url( http://naghdeketab.ir/files/site1/images/14/poaster_nghd_final.jpg)",
              }}
            ></div>
          </div>
          <div className="keen-slider__slide number-slide2">
            <div
              className="bg-contain w-full h-full "
              style={{
                backgroundImage:
                  "url( http://naghdeketab.ir/files/site1/images/14/poaster_nghd_final.jpg)",
              }}
            ></div>
          </div>
        </div>
        <div
          className="my-4 lg:my-0 lg:mr-4 lg:mb-3 lg:w-1/3 bg-gray-900 text-lg p-4 text-white overflow-hidden"
          style={{ direction: "rtl" }}
        >
          <div>
            <h1>چی تو ذهنت می‌گذره؟ ویرگول همون جاییه که می‌تونی بنویسیش</h1>
            <button className="bg-white text-gray-800 px-2 py-1 mt-3">
              <a href="/blog/create">بریم بسازیم</a>
            </button>
          </div>
          <div
            className="w-2/3 h-4/5 bg-contain bg-no-repeat bg-center mx-auto"
            style={{
              backgroundImage:
                "url(https://virgool.io/images/user-guide-first-post.png)",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Compo;
