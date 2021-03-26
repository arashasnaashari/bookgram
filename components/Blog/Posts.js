import Sticki from "./StickiBox";
import Link from "next/link";
import TimeAgo from "timeago-react";
import * as timeago from "timeago.js";
import fa from "timeago.js/lib/lang/fa";

const Compo = ({ data, neww }) => {
  timeago.register("fa", fa);

  if (typeof window !== "undefined") {
    window.onscroll = function () {
      myFunction();
    };

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky1");
      } else {
        header.classList.remove("sticky1");
      }
    }
  }
  return (
    <div className="p-4 mt-5 lg:flex lfg:flex-row lg:justify-between lg:w-4/5 lg:m-auto font-IranianSans dark:text-white">
      <style jsx>{`
        .sticky1 {
          position: sticky;
          top: 0;
        }
      `}</style>
      <div className="hidden lg:block w-2/4">
        <div id="myHeader">
          <Sticki data={neww} />
        </div>
      </div>
      <div className="lg:w-3/4">
        {data.map((e) => {
          return (
            <>
              <a href={`/blog/${e._id}`}>
                <div className="flex flex-col" style={{ direction: "rtl" }}>
                  <div className="flex flex-row justify-around w-full">
                    <div
                      className=" w-1/3 h-32 rounded-lg"
                      style={{
                        backgroundImage: `url(${e.image})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                    <div className=" w-2/3 mr-3">
                      <h1 className="text-lg mb-3">{e.title}</h1>
                      <p
                        className="text-sm text-gray-600 dark:text-gray-400"
                        style={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {e.body}
                      </p>
                    </div>
                  </div>

                  <div className="w-full mt-3">
                    <div className="flex flex-row">
                      <div
                        className=" bg-cover rounded-full w-8 h-8 "
                        style={{
                          backgroundImage: `url(${e.creator.profileURL})`,
                        }}
                      ></div>
                      <div>
                        <h1 className="text-xs pr-2 font-bold">
                          <a href={`/user/@${e.creator.username}`}>
                            {e.creator.username}
                          </a>
                        </h1>
                        <h1 className="text-xs pr-2 text-gray-600 dark:text-gray-400">
                          <TimeAgo datetime={e.date} locale="fa" />
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <div className="w-full dark:bg-gray-50 dark:bg-opacity-10 bg-gray-200 my-7 h-1"></div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Compo;
