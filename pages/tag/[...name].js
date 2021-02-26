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
export async function getServerSideProps({ params: { name } }) {
  await dbConnect();
  const data = await Post.find({ tags: name[0] })
    .skip(+name[1])
    .limit(+name[2])
    .select({ title: 1, body: 1, image: 1, date: 1, creator: 1 })
    .sort({ like: 1 })
    .populate({
      path: "creator",
      options: {
        select: { username: 1, profileURL: 1 },
      },
    })
    .lean();

  return {
    props: { posts: JSON.stringify(data), name: name[0] },
  };
}
export default Home;
