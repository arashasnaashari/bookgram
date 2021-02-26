const Compo = ({ data, rate }) => {
  const array = [];

  for (let i = 0; i < rate; i++) {
    array.push(<span key={data._id}>&#9734;</span>);
  }
  return (
    <div className="keen-slider__slide" key={data._id}>
      <div className="flex flex-col" style={{ direction: "rtl" }}>
        <a href={`/book/${data._id}`}>
          <div
            className="bg-contain w-20 h-40 bg-no-repeat"
            style={{ background: `url(${data.image})` }}
          ></div>
        </a>
        <h1 className="dark:text-white font-Vazir text-sm">{data.title}</h1>
        <h1
          className="dark:text-gray font-Vazir text-gray-400"
          style={{ fontSize: "10px" }}
        >
          {data.author}
        </h1>
        <h1 className="text-sm" style={{ color: "#FBBF24" }}>
          {array}
        </h1>
      </div>
    </div>
  );
};

export default Compo;
