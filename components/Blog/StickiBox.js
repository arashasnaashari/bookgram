import Link from "next/link";

const Compo = ({ data }) => {
  return (
    <>
      <div>
        {data.map((e) => {
          return (
            <a href={`/blog/${e._id}`}>
              <div
                className="mb-1 flex flex-row-reverse flex-nowrap mr-5"
                style={{ direction: "rtl" }}
              >
                <div className="w-2/3 flex flex-wrap content-center">
                  <div className="flex flex-col">
                    <h1 className=" text-base truncate w-11/12">{e.title}</h1>
                    <div className="flex flex-row justify-start">
                      <h1 className="text-xs text-gray-600 dark:text-gray-400 font-bold ml-2">
                        <a href={`/user/@${e.creator.username}`}>
                          {e.creator.username}
                        </a>
                      </h1>
                      <h1 className="text-xs text-gray-700">
                        {e.creator.date}
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="w-1/3">
                  <div
                    className="w-2/3 h-12 mt-2 bg-contain bg-no-repeat bg-center mx-auto"
                    style={{ backgroundImage: `url(${e.image})` }}
                  ></div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Compo;
