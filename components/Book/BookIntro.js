import Link from "next/link";
const Compo = (data) => {
  const random = data.data[Math.floor(Math.random() * 8)];

  return (
    <>
      <div
        className="bg-gradient-to-r from-bookgram-blueg text-black dark:text-gray-200 rounded-3xl flex flex-row  justify-around h-72"
        style={{ direction: "rtl" }}
      >
        <div className="w-full md:w-1/2 p-3 flex flex-col content-around justify-around">
          <div>
            <h1 className="font-IranianSans text-2xl md:text-5xl">
              {random.author} :
            </h1>
            <h1 className="font-IranianSans text-2xl md:text-5xl">
              {random.title}
            </h1>
          </div>
          <div>
            <button className="w-full md:w-1/2 px-2 py-3 bg-bookgram-btn text-white rounded-lg font-IranianSans">
              <Link href={`/book/${random._id}`}>مشاهده</Link>
            </button>
          </div>
        </div>

        <div className=" flex justify-center p-3">
          <img
            src={random.image}
            alt="s"
            className="h-1/2 md:h-4/5 shadow-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default Compo;
