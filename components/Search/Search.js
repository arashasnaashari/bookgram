import Link from "next/link";
import TimeAgo from "timeago-react";
import * as timeago from "timeago.js";
import fa from "timeago.js/lib/lang/fa";
const Compo = ({ data, name, name1 }) => {
  timeago.register("fa", fa);

  return (
    <div style={{ direction: "rtl" }}>
      <div className="bg-gray-800 h-32 justify-center flex pt-10">
        <h1 className="text-3xl text-white">
          نتایج جستوجو برای {name1} : {name}
        </h1>
      </div>
      <div className="lg:w-1/2">
        {data.map((e) => {
          return (
            <>
              <a href={`/blog/${e._id}`}>
                <div
                  className="mb-4 flex flex-row-reverse flex-nowrap justify-between h-44 lg:h-48 dark:text-gray-200"
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
                          <a href={`/user/@${e.creator.username}`}>
                            {e.creator.username}
                          </a>
                        </h1>
                        <h1 className="text-xs pr-2 text-gray-700">
                          <TimeAgo datetime={e.date} locale="fa" />
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
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
