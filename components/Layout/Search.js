import { useState } from "react";
import { useRouter } from "next/router";

const Compo = () => {
  const [text, setText] = useState("");
  const router = useRouter();
  const handleSearch = async (e) => {
    e.preventDefault();
    let path;
    if (text) {
      if (
        router.asPath.split("/")[1] == "ketab" ||
        router.asPath.split("/")[1] == "book" ||
        router.asPath.split("/")[1] == "about" ||
        router.asPath.split("/")[1] == "category" ||
        router.asPath.split("/")[1] == "" ||
        router.asPath.split("/")[1] == "searchbook"
      ) {
        path = "searchbook";
      } else if (
        router.asPath.split("/")[1] == "tag" ||
        router.asPath.split("/")[1] == "blog" ||
        router.asPath.split("/")[1] == "user" ||
        router.asPath.split("/")[1] == "searchblog"
      ) {
        path = "searchblog";
      }
      router.push(`/${path}/${text}/0/7`);
    }
  };
  return (
    <>
      <div className="relative w-full md:w-3/4">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <button
            type="submit"
            className="p-1 focus:outline-none focus:shadow-outline"
            onClick={handleSearch}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="ml-3 w-6 h-6 text-gray-500"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </span>
        <form onSubmit={handleSearch}>
          <input
            type="search"
            name="q"
            onChange={(t) => setText(t.target.value)}
            className="bg-bookgram-search py-2 text-sm rounded-md pl-10 focus:outline-none w-full h-12 placeholder-bookgram-menu font-IranianSans pr-3"
            placeholder="جستوجو بر اساس نام کتاب ..."
          />
        </form>
      </div>
    </>
  );
};
export default Compo;
