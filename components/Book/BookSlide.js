// import link from "next/link";

const Compo = ({ data, rate }) => {
  const array = [];

  for (let i = 0; i < rate; i++) {
    array.push(<span key={data._id}>&#9734;</span>);
  }
  return (
    <div className="keen-slider__slide" key={data._id}>
      <div className="flex flex-col" style={{ direction: "rtl" }}>
        <a href={`/book/${data._id}`}>
          <a>
            <img
              src={data.image}
              className="rounded-xl w-22 h-32 sm:w-32 sm:h-44 md:w-36 md:h-40"
            ></img>
            {/* <div
            style={{
              backgroundImage: `url(${data.image})`,
              width: "200px",
              height: "100px",
              backgroundSize: "cover",
            }}
          ></div> */}
          </a>
        </a>
        <a href={`/book/${data._id}`}>
          <h1 className="dark:text-white font-Vazir text-sm">{data.title}</h1>
        </a>
        <a href={`/ketab/author/${data.author}/0/7`}>
          <h1
            className="dark:text-gray font-Vazir text-gray-400 break-all cursor-pointer"
            style={{ fontSize: "10px" }}
          >
            {data.author}
          </h1>
        </a>
        <h1 className="text-sm" style={{ color: "#FBBF24" }}>
          {array}
        </h1>
      </div>
    </div>
  );
};

export default Compo;
