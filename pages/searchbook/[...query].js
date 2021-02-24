import LayOut from "../../components/Layout/Layout";
import SearchBook from "../../components/Search/SearchBook";
import { useState } from "react";
import dbConnect from "../../utils/dbConnect";
import Book from "../../model/Book";

function Home({ posts, name }) {
  return (
    <LayOut>
      <div className="bg-gray-800 h-32 justify-center flex pt-10">
        <h1 className="text-3xl text-white">نتایج جستوجو برای : {name}</h1>
      </div>
      <div style={{ direction: "rtl" }}>
        <div className="flex flex-row flex-wrap p-5">
          {JSON.parse(posts).map((e) => {
            return <SearchBook data={e} key={e._id} rate={e.star / e.nstar} />;
          })}
        </div>
      </div>
    </LayOut>
  );
}
export async function getServerSideProps({ params: { query } }) {
  await dbConnect();
  const books = await Book.find({ title: new RegExp(query[0]) })
    .skip(+query[1])
    .limit(+query[2])
    .select({ title: 1, image: 1, author: 1, star: 1, nstar: 1 })
    .sort({ star: -1, nstar: -1 })
    .lean();

  return {
    props: { posts: JSON.stringify(books), name: query[0] },
  };
}
export default Home;
