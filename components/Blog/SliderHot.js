import { useKeenSlider } from "keen-slider/react";
import Link from "next/link";
import TimeAgo from "timeago-react";
import * as timeago from "timeago.js";
import fa from "timeago.js/lib/lang/fa";
const A = ({ data }) => {
  timeago.register("fa", fa);
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 300px)": {
        slidesPerView: 1.4,
        mode: "free-snap",
      },
      "(min-width: 768px)": {
        slidesPerView: 2.2,
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
    <div className="lg:hidden dark:text-white">
      <div className="flex justify-between p-3 mb-2">
        <div></div>
        <div>
          <h1 className="font-Vazir text-2xl font-bold dark:text-gray-100">
            محبوب ترین ها
          </h1>
        </div>
      </div>
      <div ref={sliderRef} className="keen-slider mb-10">
        {data &&
          data.map((e) => {
            return (
              <div className="keen-slider__slide">
                <div className="flex flex-col" style={{ direction: "rtl" }}>
                  <a href={`/blog/${e._id}`}>
                    <div
                      className="w-full h-56 md:h-56 mt-2 bg-cover bg-no-repeat bg-center mx-auto"
                      style={{ backgroundImage: `url(${e.image})` }}
                    ></div>{" "}
                  </a>

                  <span className="text-right">
                    <TimeAgo datetime={e.date} locale="fa" />{" "}
                    <span className="text-5xl">.</span>{" "}
                    <span className="bg-bookgram-badge text-white px-2 rounded-md">
                      <a href={`/user/@${e.creator.username}`}>
                        {e.creator.username}
                      </a>
                    </span>
                  </span>
                  <Link href={`/blog/${e._id}`}>
                    <h1 className="font-IranianSans text-lg font-bold">
                      {e.title}
                    </h1>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default A;
