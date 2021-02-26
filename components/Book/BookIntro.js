const Compo = () => {
  return (
    <>
      <div
        className="p-4 grid grid-cols-2 gap-4 md:h-72 bg-gradient-to-r from-bookgram-blueg text-black  dark:text-gray-200 rounded-3xl"
        style={{ direction: "rtl" }}
      >
        <div className="p-4 flex content-evenly flex-wrap">
          <h1 className="font-IranianSans text-xl md:text-4xl">
            یوال هرری: انسان خردمند: تاریخ مختصر بشر
          </h1>

          <button className="px-3 py-2 mt-3 bg-bookgram-btn text-white rounded-sm">
            مشاهده همه
          </button>
        </div>
        <div className="flex justify-around items-center">
          <img
            src="/img/add-to-library.png"
            alt="s"
            className="h-1/2 md:h-auto"
            width="100"
          />
          <img
            src="/img/add-to-library1.png"
            alt="s"
            className="h-1/2 md:h-auto"
            width="100"
          />
        </div>
      </div>
    </>
  );
};

export default Compo;
