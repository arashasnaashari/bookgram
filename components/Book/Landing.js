const Compo = () => {
  return (
    <>
      <div
        className=" xs:bg-landing grid grid-cols-2 gap-4 md:h-80 bg-bookgram text-blue-800 dark:bg-gray-800 dark:text-gray-200 rounded-md p-4"
        style={{
          direction: "rtl",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-bookgram bg-opacity-40 shadow-md md:shadow-none md:bg-opacity-0 p-4 flex flex-col flex-wrap col-span-2 md:col-span-1">
          <h1 className="font-IranianSans text-3xl sm:text-2xl md:text-4xl text-bookgram-head dark:text-gray-200 mb-4 md:mb-auto">
            کتابخانه خودت را بساز
          </h1>
          <p className="text-md md:leading-8 sm:text-sm md:text-xl md:break-words font-IranianSans mb-4 md:mb-auto">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون
          </p>
          <button className="w-2/3 md:w-1/3 px-2 py-3 mt-3 bg-bookgram-btn text-white rounded-sm">
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
