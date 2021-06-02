import { useKeenSlider } from "keen-slider/react";
import SlideBook from "./BookSlide";
const A = () => {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 100px)": {
        slidesPerView: 1.5,
        mode: "free-snap",
      },
      "(min-width: 360px)": {
        slidesPerView: 3.5,
        mode: "free-snap",
      },
      "(min-width: 768px)": {
        slidesPerView: 4.5,
        mode: "free-snap",
      },
      "(min-width: 1024px)": {
        slidesPerView: 6.5,
        mode: "free-snap",
      },
    },
    slidesPerView: 1,
    spacing: 15,
    rtl: true,
  });
  return (
    <>
      {/* <div className="flex justify-between p-3 mb-2">
        <div>
          <a className="text-gray-300 text-sm">{" <<"}بیشتر</a>
        </div>
        <div>
          <h1 className="font-Vazir text-2xl font-bold dark:text-gray-100">
            محبوب ترین ها
          </h1>
        </div>
      </div> */}
      <div ref={sliderRef} className="keen-slider">
        {[1, 2, 3, 3, 3, , 3, 3, 4, 5, 5].map((e) => {
          return (
            <div className="keen-slider__slide" key={1}>
              <div className="flex flex-col" style={{ direction: "rtl" }}>
                <a>
                  <img
                    src="/img/load.gif"
                    className="rounded-xl w-22 h-32 sm:w-32 sm:h-44 md:w-36 md:h-40"
                  ></img>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default A;
