import SliderHot from "../components/Book/SliderHot";
import Loading from "../components/Book/sliderLoading";
import SliderSell from "../components/Book/SliderSell";
import SliderNew from "../components/Book/SliderNew";
import SliderAuthor from "../components/Book/SliderAuthor";
import SliderBlog from "../components/Book/SliderBlog";
import Landing from "../components/Book/Landing";
import BookIntro from "../components/Book/BookIntro";
import LayOut from "../components/Layout/Layout";
import Document, { Html, Head, Main, NextScript } from "next/document";

import { useState, useEffect } from "react";
function Home({ data, datablog }) {
  const [bestsellbook, Setbestsellbook] = useState();
  const [newbook, Setnewbook] = useState();
  const [hotbook, Sethotbook] = useState();
  const [readblebook, Setreadblebook] = useState();
  const [hotbookblog, Sethotbookblog] = useState();
  useEffect(async () => {
    async function fetchHot() {
      const reshot = await fetch(
        "https://bookgram.vercel.app/api/hotbook/0/8",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const hotbook0 = await reshot.json();
      Sethotbook(hotbook0);
    }

    async function fetchReadble() {
      const reshot = await fetch("https://bookgram.vercel.app/api/readable", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const hotbook0 = await reshot.json();
      Setreadblebook(hotbook0);
    }

    async function fetchSell() {
      const ressell = await fetch(
        "https://bookgram.vercel.app/api/bestsellbook/0/8",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const bestsellbook0 = await ressell.json();

      Setbestsellbook(bestsellbook0);
    }
    async function fetchNew() {
      const resnew = await fetch(
        "https://bookgram.vercel.app/api/newbook/0/8",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const newbook0 = await resnew.json();

      Setnewbook(newbook0);
    }
    async function fetchBlog() {
      const reshotblog = await fetch(
        "https://bookgram.vercel.app/api/bestpost/0/7",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const hotbookblog0 = await reshotblog.json();

      Sethotbookblog(hotbookblog0);
    }

    fetchBlog();
    fetchSell();
    fetchNew();
    fetchHot();
    fetchReadble();
  }, []);

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
      {hotbook && <SliderHot data={hotbook} />}
      {!hotbook && <Loading />}

      <div
        style={{
          width: "100%",
          backgroundColor: "#c1c3c7",
          height: "2px",
          margin: "3rem 0",
        }}
      ></div>
      {hotbook && <BookIntro data={hotbook} />}
      <div
        style={{
          width: "100%",
          backgroundColor: "#c1c3c7",
          height: "2px",
          margin: "3rem 0",
        }}
      ></div>
      {readblebook && <SliderNew data={readblebook} name=" ! آنلاین بخون" />}
      {!readblebook && <Loading />}
      <div
        style={{
          width: "100%",
          backgroundColor: "#c1c3c7",
          height: "2px",
          margin: "3rem 0",
        }}
      ></div>
      {newbook && <SliderNew data={newbook} name="تازه ها" />}
      {!newbook && <Loading />}

      <div
        style={{
          width: "100%",
          backgroundColor: "#c1c3c7",
          height: "2px",
          margin: "3rem 0",
        }}
      ></div>
      {bestsellbook && <SliderSell data={bestsellbook} />}
      {!bestsellbook && <Loading />}
      <div
        style={{
          width: "100%",
          backgroundColor: "#c1c3c7",
          height: "2px",
          margin: "3rem 0",
        }}
      ></div>

      {hotbookblog && <SliderBlog data={hotbookblog} />}
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
  const reshot = await fetch("https://bookgram.vercel.app/api/hotbook/0/8", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const reshotblog = await fetch(
    "https://bookgram.vercel.app/api/bestpost/0/7",
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const hotbookblog = await reshotblog.json();
  const hotbook = await reshot.json();

  return {
    props: { data: hotbook },
  };
}
export default Home;
