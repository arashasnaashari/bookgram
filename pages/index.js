import SliderHot from "../components/Book/SliderHot";
import SliderSell from "../components/Book/SliderSell";
import SliderNew from "../components/Book/SliderNew";
import SliderAuthor from "../components/Book/SliderAuthor";
import SliderBlog from "../components/Book/SliderBlog";
import Landing from "../components/Book/Landing";
import BookIntro from "../components/Book/BookIntro";
import LayOut from "../components/Layout/Layout";

import { useState } from "react";
function Home({ bestsellbook, newbook, hotbook }) {
  return (
    <LayOut>
      <Landing />
      <div
        style={{
          width: "100%",
          backgroundColor: "#c1c3c7",
          height: "2px",
          margin: "3rem 0",
        }}
      ></div>
      <SliderHot data={hotbook} />
      <div
        style={{
          width: "100%",
          backgroundColor: "#c1c3c7",
          height: "2px",
          margin: "3rem 0",
        }}
      ></div>
      <BookIntro data={hotbook} />
      <div
        style={{
          width: "100%",
          backgroundColor: "#c1c3c7",
          height: "2px",
          margin: "3rem 0",
        }}
      ></div>
      <SliderNew data={newbook} />

      <div
        style={{
          width: "100%",
          backgroundColor: "#c1c3c7",
          height: "2px",
          margin: "3rem 0",
        }}
      ></div>
      <SliderSell data={bestsellbook} />
      <div
        style={{
          width: "100%",
          backgroundColor: "#c1c3c7",
          height: "2px",
          margin: "3rem 0",
        }}
      ></div>
      {/* slider blog*/}

      <SliderBlog />
      <div
        style={{
          width: "100%",
          backgroundColor: "#c1c3c7",
          height: "2px",
          margin: "3rem 0",
        }}
      ></div>
      {/* slider auhtor */}

      <SliderAuthor />
      <div
        style={{
          width: "100%",
          backgroundColor: "#c1c3c7",
          height: "2px",
          margin: "3rem 0",
        }}
      ></div>
    </LayOut>
  );
}
export async function getServerSideProps(context) {
  const reshot = await fetch("http://localhost:3000/api/hotbook/0/8", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const ressell = await fetch("http://localhost:3000/api/bestsellbook/0/8", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const resnew = await fetch("http://localhost:3000/api/newbook/0/8", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const hotbook = await reshot.json();
  const bestsellbook = await ressell.json();
  const newbook = await resnew.json();

  return {
    props: { hotbook, newbook, bestsellbook },
  };
}
export default Home;
