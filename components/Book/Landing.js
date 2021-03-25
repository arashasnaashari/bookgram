const Compo = () => {
  return (
    <>
      <div
        className=" xs:bg-landing grid grid-cols-2 gap-4 lg:h-80 bg-bookgram text-blue-800 dark:bg-gray-800 dark:text-gray-200 rounded-2xl p-4"
        style={{
          direction: "rtl",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-bookgram  dark:bg-gray-800 dark:bg-opacity-75 bg-opacity-75 shadow-lg rounded-xl lg:shadow-none lg:bg-opacity-0 p-4 flex flex-col flex-wrap col-span-2 lg:col-span-1">
          <h1 className=" font-Vazir text-3xl sm:text-2xl lg:text-4xl text-bookgram-head dark:text-gray-200 mb-4 lg:mb-auto">
            کتابخانه خودت را بساز
          </h1>
          <p className="text-lg lg:leading-8 sm:text-sm lg:text-xl lg:break-words  font-Vazir mb-4 lg:mb-auto">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون
          </p>
          <button className="w-2/3 lg:w-1/3 px-2 py-3 mt-3 bg-bookgram-btn text-white rounded-xl">
            مشاهده همه
          </button>
        </div>
        <div
          className="md:flex content-center col-span-1"
          style={{
            backgroundImage: "url(./img/show.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </>
  );
};

export default Compo;
