import LayOut from "../../components/Layout/Layout";
import Search from "../../components/Search/Search";
import { useState } from "react";
import dbConnect from "../../utils/dbConnect";
import User from "../../model/User";
import Post from "../../model/Post";

function Home({ posts, name }) {
  return (
    <LayOut>
      <Search data={JSON.parse(posts)} name={name} name1={"تگ"} />
    </LayOut>
  );
}
export async function getServerSideProps({ params: { query } }) {
  await dbConnect();
  const books = await Post.find({ title: new RegExp(query[0]) })
    .skip(+query[1])
    .limit(+query[2])
    .sort({ like: 1 })
    .select({ title: 1, body: 1, image: 1, date: 1, creator: 1 })
    .populate({
      path: "creator",
      options: {
        select: { username: 1, profileURL: 1 },
      },
    })
    .lean();

  return {
    props: { posts: JSON.stringify(books), name: query[0] },
  };
}
export default Home;
