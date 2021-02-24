import Link from "next/link";
const Compo = ({ data, name ,name1}) => {
  return (
    <div style={{ direction: "rtl" }}>
      <div className="bg-gray-800 h-32 justify-center flex pt-10">
        <h1 className="text-3xl text-white">نتایج جستوجو برای {name1} : {name}</h1>
      </div>
      <div className="lg:w-1/2">
        {data.map((e) => {
          return (
            <>
              <Link href={`/blog/${e._id}`}>
                <div
                  className="mb-4 flex flex-row-reverse flex-nowrap justify-between h-44 lg:h-48 "
                  style={{ direction: "rtl" }}
                >
                  <div className="w-2/3 flex flex-wrap content-evenly">
                    <h1 className="text-xl pl-20">{e.title}</h1>
                    <h1 className="text-xs">{e.body}</h1>
                  </div>
                  <div className="w-1/3">
                    <div
                      className="w-2/3 h-4/5 bg-contain bg-no-repeat bg-center mx-auto"
                      style={{ backgroundImage: `url(${e.image})` }}
                    ></div>
                    <div className="flex flex-row mr-7">
                      <div
                        className=" bg-cover rounded-full w-8 h-8 "
                        style={{
                          backgroundImage: `url(${e.creator.profileURL})`,
                        }}
                      ></div>
                      <div>
                        <h1 className="text-xs pr-2 text-gray-700">
                          {e.creator.username}
                        </h1>
                        <h1 className="text-xs pr-2 text-gray-700">{e.date}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div
                style={{
                  width: "90%",
                  backgroundColor: "#c1c3c7",
                  height: "0.2px",
                  margin: "auto 0",
                }}
              ></div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Compo;
