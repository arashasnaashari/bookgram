import Post from "../../model/Post";
import User from "../../model/User";
import dbConnect from "../../utils/dbConnect";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";
import Form from "../../components/Layout/Form";
import Views from "../../components/Blog/views";
import ShowData from "../../components/Blog/ShowData";
import Creatorbox from "../../components/Blog/creatorbox";
// import AuthContext from "../../context/auth-context";
import useUser from "../../utils/useUser";

import React, { useState, useContext } from "react";

const fetcher = (url) => fetch(url).then((r) => r.json());

const Compo = ({ data }) => {
  // const context = useContext(AuthContext);
  const [jomle, showJomle] = useState(false);
  const [err, showErr] = useState(false);
  const router = useRouter();
  const { user, mutateUser } = useUser();
  if (router.isFallback) {
    return (
      <Layout>
        <div style={{ direction: "rtl" }}>
          <div>صفحه در حال ساخت است لطفا منتظر بمانید ....</div>
        </div>
      </Layout>
    );
  }
  const handleStarRating = async (l) => {
    l.preventDefault();
    if (typeof window !== "undefined") {
      if (localStorage.getItem(`like-${data._id}`) !== "true") {
        const res = await fetch("https://bookgram.vercel.app/api/like", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ bookId: data._id }),
        });
        const data1 = await res.json();
        showJomle(true);
        if (typeof window !== "undefined") {
          localStorage.setItem(`like-${data._id}`, true);
        }
      } else {
        console.log("U RATE BEFORE");
        showErr(true);
      }
    }
  };

  return (
    <Layout>
      <div
        style={{ direction: "rtl" }}
        className="dark:text-gray-100 mb-52 md:mb-auto font-Vazir"
      >
        <ShowData data={data.data} />

        <div className="flex flex-row">
          {data.tags.map((t) => {
            return (
              <div className="flex flex-row">
                <a
                  className="m-3 rounded-sm bg-gray-300 text-black px-3 py-1 "
                  href={`/tag/${t}`}
                >
                  {t}
                </a>
              </div>
            );
          })}
        </div>
        <div className="w-10" onClick={handleStarRating}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="fill-current text-red-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          {jomle && <h1>ثبت شد</h1>}
          {err && <h1>قبلا لایک کردی</h1>}
        </div>
        <Creatorbox data={data.creator} userId={user?.userId} />
        <Views
          userId={user?.userId}
          bookId={data._id}
          name={user?.username}
          img={user?.profileURL}
        />
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  await dbConnect();

  const data = await Post.find().select({
    _id: 1,
  });
  const paths = data.map((e) => ({
    params: {
      _id: e._id.toString(),
    },
  }));
  return { paths: paths, fallback: true };
}

export async function getStaticProps({ params: { _id } }) {
  await dbConnect();

  const posts = await Post.findById(_id)
    .select({
      data: 1,
      like: 1,
      tags: 1,
      creator: 1,
    })
    .populate({
      path: "creator",
      options: {
        select: { username: 1, profileURL: 1 },
      },
    });
  const data = {
    ...posts.toObject(),
    _id: posts._id.toString(),
    creator: {
      _id: posts.creator._id.toString(),
      username: posts.creator.username,
      profileURL: posts.creator.profileURL,
    },
  };
  return {
    props: { data },
    revalidate: 6000,
  };
}

export default Compo;
/*
{
  tags: [ 's', 's', 's' ],
  _id: '602ef94586266c17a4c0763e',
  creator: {
    _id: '602e1c8cec95ef26d0fcbaa9',
    username: 'arash',
    profileURL: 'https://www.seekpng.com/png/full/41-410093_circled-user-icon-user-profile-icon-png.png'
  },
  data: "{'time':1613691205006,'blocks':[{'type':'header','data':{'text':'aaaaaaaaaaa','level':2}},{'type':'paragraph','data':{'text':'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}},{'type':'image','data':{'file':{'url':'https://res.cloudinary.com/bookgram/image/upload/v1613691197/hjhyptdzhy2nzpowkpyp.jpg'},'caption':'','withBorder':false,'stretched':false,'withBackground':false}}],'version':'2.19.1'}"        
}








*/
