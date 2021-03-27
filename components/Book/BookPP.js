const Compo = ({ data, userId }) => {
  const array = [];
  const rate = data.star / data.nstar;
  for (let i = 0; i < rate; i++) {
    array.push(
      <span key={data._id} style={{ color: "gold" }}>
        &#9734;
      </span>
    );
  }
  return (
    <div style={{ direction: "rtl" }} className="dark:text-white">
      <div>
        <a>{data.title}</a> <span> / </span>
        {data.translator && (
          <>
            <a href={`/ketab/translator/${data.translator}/0/7`}>
              {data.translator}
            </a>{" "}
            <span> / </span>
          </>
        )}{" "}
        <a href={`/ketab/author/${data.author}/0/7`}>{data.author}</a>{" "}
        <span> / </span>
        <a href={`/ketab/category/${data.category}/0/7`}>
          {data.category}
        </a>{" "}
        <span> / </span>
        <a href={`/ketab/publication/${data.publication}/0/7`}>
          {data.publication}
        </a>{" "}
      </div>
      <div className="flex flex-rowm-5 font-Vazir">
        <div className="text-center">
          <img src={data.image} className="w-48 mx-auto"></img>
          {array}
          <h1>از {data.nstar}نظر</h1>
        </div>{" "}
        <div className="col-span-2 flex flex-col p-4">
          <div className="mb-2">
            <h1 className="text-3xl mb-20">{data.title}</h1>
            <h1 className="text-xs text-gray-500">
              نویسنده :{" "}
              <a href={`/ketab/author/${data.author}/0/7`}>{data.author}</a>
            </h1>
            {data.translator && (
              <h1 className="text-xs text-gray-500">
                مترجم :{" "}
                <a href={`/ketab/translator/${data.translator}/0/7`}>
                  {data.translator}
                </a>
              </h1>
            )}
            <h1 className="text-xs text-gray-500">
              انتشارات{" "}
              <a href={`/ketab/publication/${data.publication}/0/7`}>
                {data.publication}
              </a>
            </h1>
          </div>
          <div className="flex ">
            {/* <div>
              <button className="p-4 mx-2 bg-bookgram-btn rounded-sm">
                خرید
              </button>
            </div> */}
            <div>
              <button
                className="p-4 bg-bookgram-btn rounded-sm text-sm"
                onClick={async () => {
                  const res = await fetch(
                    "https://localhost:3000/api/addtolib",
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        bookId: data._id,
                        userId: userId,
                      }),
                    }
                  );
                  const data1 = await res.json();
                  alert("okk");
                }}
              >
                اضافه به کتابخانه
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compo;
