import SliderHot from "../../components/Blog/SliderHot";
import Posts from "../../components/Blog/Posts";
import Landing from "../../components/Blog/Landing";
import LayOut from "../../components/Layout/Layout";
import { useState } from "react";

function Home({ hotbook, newbook }) {
  return (
    <LayOut>
      <Landing />
      <SliderHot data={hotbook} />
      <Posts data={hotbook} neww={newbook} />
      <div
        style={{
          width: "100%",
          backgroundColor: "#c1c3c7",
          height: "2px",
          margin: "5rem 0",
        }}
      ></div>
    </LayOut>
  );
}
export async function getServerSideProps(context) {
  const resnew = await fetch("https://bookgram.vercel.app/api/newpost/0/5", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const reshot = await fetch("https://bookgram.vercel.app/api/bestpost/0/10", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const hotbook = await reshot.json();
  const newbook = await resnew.json();

  return {
    props: { hotbook, newbook },
  };
}
export default Home;
