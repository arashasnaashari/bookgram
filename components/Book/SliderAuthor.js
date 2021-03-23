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
      <div className="flex justify-between p-3 mb-2">
        <div></div>
        <div>
          <h1 className="font-Vazir text-2xl font-bold dark:text-gray-100">
            معرفی نویسنده
          </h1>
        </div>
      </div>
      <div className="md:grid md:grid-cols-10 flex flex-col-reverse font-Vazir">
        <div className="col-span-5 md:col-span-2">
          <div className="md:w-full text-center md:h-full flex md:flex-col flex-row md:justify-end justify-around mt-2 md:mt-auto">
            <h1 className="text-gray-400">{`<<`} بیشتر </h1>
            <h1 className="text-xl text-gray-700 md:hidden">منظر حسینی</h1>
          </div>
        </div>
        <div
          className=" col-span-10 md:col-span-6 flex flex-col justify-between"
          style={{ direction: "rtl" }}
        >
          <p className="px-3 dark:text-gray-200 text-sm md:w-auto w-3/4 md:text-xl mx-auto md:mx-0  ">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
          </p>
          <div className="">
            <h1 className="text-2xl text-gray-700 md:block hidden">
              منظر حسینی
            </h1>
          </div>
        </div>
        <div className="col-span-10 md:col-span-2 flex flex-row justify-center md:justify-end">
          <img
            src="/img/author-intro.png"
            className="md:w-4/5 w-1/4 mb-2 md:mb-auto"
          ></img>
        </div>
      </div>
    </>
  );
};
export default A;
