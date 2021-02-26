import LayOut from "../../components/Layout/Layout";
import SearchBook from "../../components/Search/SearchBook";
import { useState } from "react";
import dbConnect from "../../utils/dbConnect";
import Book from "../../model/Book";

function Home({ posts, name, extra }) {
  return (
    <LayOut>
      <div className="bg-gray-800 h-32 justify-center flex pt-10">
        <h1 className="text-3xl text-white">
           {name} در {extra} نتایج جستوجو برای 
        </h1>
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
export async function getServerSideProps({ params: { slug } }) {
  await dbConnect();
  let data;
  if (slug[0] == "author") {
    const posts = await Book.find({ author: slug[1] })
      .skip(+slug[2])
      .limit(+slug[3])
      .sort({ like: 1 })

      .lean();
    data = posts;
  } else if (slug[0] == "translator") {
    const posts = await Book.find({ translator: slug[1] })
      .skip(+slug[2])
      .limit(+slug[3])
      .sort({ like: 1 })
      .lean();
    data = posts;
  } else if (slug[0] == "category") {
    const posts = await Book.find({ category: slug[1] })
      .skip(+slug[2])
      .limit(+slug[3])
      .sort({ like: 1 })
      .lean();
    data = posts;
  } else if (slug[0] == "publication") {
    const posts = await Book.find({ publication: slug[1] })
      .skip(+slug[2])
      .limit(+slug[3])
      .sort({ like: 1 })
      .lean();
    data = posts;
  }

  return {
    props: { posts: JSON.stringify(data), name: slug[0], extra: slug[1] },
  };
}
export default Home;
