const Compo = ({ data, userId }) => {
  const handleFollow = async (f) => {
    if (userId !== data._id) {
      f.preventDefault();
      const res = await fetch("http://localhost:3000/api/follow", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ follower: userId, followed: data._id }),
      });
      const data1 = await res.json();
    }
  };
  return (
    <>
      <div className="flex flex-row justify-start p-3 ">
        <div>
          <div
            className="w-10 h-10 bg-cover"
            style={{ backgroundImage: `url(${data.profileURL})` }}
          ></div>
        </div>
        <div className="mr-4">
          <h1>
            <a href={`/user/@${data.username}`}>{data.username}</a>
          </h1>
          <h1 className="text-xs">درباره من</h1>
        </div>
        <div className="mr-4">
          <button
            className="border-2 border-indigo-600 p-2"
            onClick={handleFollow}
          >
            دنبال کردن
          </button>
        </div>
      </div>
    </>
  );
};

export default Compo;
