import { useKeenSlider } from "keen-slider/react";

const A = (props) => {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 768px)": {
        slidesPerView: 2,
        mode: "free-snap",
      },
      "(min-width: 1200px)": {
        slidesPerView: 2,
        mode: "free-snap",
      },
    },
    slidesPerView: 1,
    spacing: 15,
    rtl: true,
  });

  return (
    <>
      <div className="flex justify-between">
        <div>
          <h1>محبوب</h1>
        </div>
        <div>
          <a>بیشتر</a>
        </div>
      </div>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">
          <div className="flex flex-col" style={{ direction: "rtl" }}>
            <img src="/img/new-reveiws1.png" width="500" />
            <span className="text-right">
              <span className="bg-bookgram-badge text-white px-2 rounded-md">
                User
              </span>{" "}
              <span className="text-5xl">.</span> 4min
            </span>
            <h1 className="font-IranianSans">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟
            </h1>
            <p className="text-gray-400">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
            </p>
          </div>
        </div>
        <div className="keen-slider__slide">
          <div className="flex flex-col" style={{ direction: "rtl" }}>
            <img src="/img/new-reveiws1.png" width="500" />
            <span className="text-right">
              <span className="bg-bookgram-badge text-white px-2 rounded-md">
                User
              </span>{" "}
              <span className="text-5xl">.</span> 4min
            </span>
            <h1 className="font-IranianSans">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟
            </h1>
            <p className="text-gray-400">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default A;
