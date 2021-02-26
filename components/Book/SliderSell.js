import { useKeenSlider } from "keen-slider/react";
import SlideBook from "./BookSlide";
const A = ({ data }) => {
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
      <div className="flex justify-between">
        <div>
          <h1>محبوب</h1>
        </div>
        <div>
          <a>بیشتر</a>
        </div>
      </div>
      <div ref={sliderRef} className="keen-slider">
        {data.map((e) => {
          return <SlideBook data={e} key={e._id} rate={e.star / e.nstar} />;
        })}
      </div>
    </>
  );
};
export default A;
