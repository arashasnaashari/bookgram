import LayOut from "../components/Layout/Layout";
import SearchBook from "../components/Search/SearchBook";
import { useState, useEffect } from "react";

function Home() {
  const [bestsellbook, Setbestsellbook] = useState();
  const [skip, setskip] = useState(0);
  const [limit, setlimit] = useState(5);
  const [data, setData] = useState();
  async function fetchSell(skip, limit) {
    const ressell = await fetch(`http://localhost:3000/api/newbook/${0}/${5}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const bestsellbook0 = await ressell.json();
    // console.log(
    //   bestsellbook0.map((e) => {
    //     return `${e.title}    ${e.star}`;
    //   })
    // );
    setData(bestsellbook0);
  }

  useEffect(async () => {
    fetchSell(skip, limit);

    //   // if (typeof window !== "undefined") {
    //   //   document.addEventListener("scroll", () => {
    //   //     let scrollTop = document.documentElement.scrollTop;
    //   //     let windowHeight = window.innerHeight;
    //   //     let height = document.body.scrollHeight - windowHeight;
    //   //     let scrollPercentage = scrollTop / height;

    //   //     if (scrollPercentage > 0.9) {
    //   //     //   setLoad(true);
    //   //       fetchSell(size, size + 10);
    //   //     //   setLoad(false);
    //   //       setSize(size + 10);
    //   //     }
    //   //   });
    //   // }
  }, []);
  const handleLoad = async (e) => {
    e.preventDefault();
    const ressell = await fetch(
      `http://localhost:3000/api/newbook/${skip + 5}/${5}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    setskip(skip + 5);
    const bestsellbook0 = await ressell.json();
    // setData(bestsellbook0);
    const mergeByProperty = (target, source, prop) => {
      source.forEach((sourceElement) => {
        let targetElement = target.find((targetElement) => {
          return sourceElement[prop] === targetElement[prop];
        });
        targetElement
          ? Object.assign(targetElement, sourceElement)
          : target.push(sourceElement);
      });
    };
    mergeByProperty(data, bestsellbook0, "title");
    console.log(bestsellbook0);
    console.log(data);
    setData(data);

    // console.log(data);
  };
  return (
    <LayOut>
      <div className="bg-gray-800 h-32 justify-center flex pt-10">
        <h1 className="text-3xl text-white">نتایج جستوجو برای : </h1>
        <button onClick={handleLoad}>More ...</button>
      </div>
      <div style={{ direction: "rtl" }} className="p-10">
        <div className="grid grid-cols-3 gap-4 md:grid-cols-5 mx-auto">
          {data &&
            data.map((e) => {
              return (
                <SearchBook data={e} key={e._id} rate={e.star / e.nstar} />
              );
            })}
        </div>
        {/* {load && <h1>Loading ...</h1>} */}
      </div>
    </LayOut>
  );
}

export default Home;
