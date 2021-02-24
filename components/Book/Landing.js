const Compo = () => {
  return (
    <>
      <div
        className="grid grid-cols-2 gap-4 md:h-96 bg-bookgram text-blue-800 dark:bg-gray-800 dark:text-gray-200 rounded-md"
        style={{ direction: "rtl" }}
      >
        <div className="p-4 flex content-evenly flex-wrap">
          <h1 className="font-IranianSans text-2xl md:text-5xl text-bookgram-head dark:text-gray-200">
            کتابخانه خودت را بساز
          </h1>
          <p className="tex-base md:leading-8 md:text-xl md:break-words font-IranianSans">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون
          </p>
          <button className="px-3 py-2 mt-3 bg-bookgram-btn text-white rounded-sm">
            مشاهده همه
          </button>
        </div>
        <div className="flex content-center">
          <img src="./img/show.png" alt="s" className="h-5/6 md:h-auto" />
        </div>
      </div>
    </>
  );
};

export default Compo;
