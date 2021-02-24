import Book from "../../model/Book";
import dbConnect from "../../utils/dbConnect";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";
import Form from "../../components/Layout/Form";
import BookPP from "../../components/Book/BookPP";
import Comment from "../../components/Book/comment";
// import AuthContext from "../../context/auth-context";
import useUser from "../../utils/useUser";
import React, { useState, useContext } from "react";
import StarRatings from "react-star-ratings";

const fetcher = (url) => fetch(url).then((r) => r.json());

const Compo = ({ data }) => {
  const { user, mutateUser } = useUser();
  // const context = useContext(AuthContext);
  const [rate, setRate] = useState(0);
  const [btn, showBtn] = useState(false);
  const [jomle, showJomle] = useState(false);
  const router = useRouter();
  if (router.isFallback) {
    return (
      <Layout>
        <div style={{ direction: "rtl" }}>
          <div>صفحه در حال ساخت است لطفا منتظر بمانید ....</div>
        </div>
      </Layout>
    );
  }
  const handleStarRating = async (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      if (localStorage.getItem(`star-${data._id}`) !== "true") {
        const res = await fetch("http://localhost:3000/api/starbook", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ bookId: data._id, star: rate }),
        });
        const data1 = await res.json();
        showBtn(false);
        showJomle(true);
        if (typeof window !== "undefined") {
          localStorage.setItem(`star-${data._id}`, true);
        }
      } else {
        console.log("U RATE BEFORE");
      }
    }
  };
  const changeRating = (e) => {
    setRate(e);
    showBtn(true);
  };

  return (
    <Layout>
      <BookPP data={data} userId={user?.userId} />
      <div style={{ direction: "rtl" }}>
        {user?.isLoggedIn && (
          <StarRatings
            ignoreInlineStyles={false}
            rating={rate}
            starDimension="20px"
            starRatedColor="gold"
            changeRating={changeRating}
            numberOfStars={6}
            name="rating"
            starHoverColor="yellow"
          />
        )}
        {!user?.isLoggedIn && <Form shouldshow="star" />}
        {btn && <button onClick={handleStarRating}>ثبت</button>}
        {jomle && <h1>ثبت شد</h1>}
        <Comment
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

  const data = await Book.find().select({
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

  const books = await Book.findById(_id).select({
    title: 1,
    image: 1,
    author: 1,
    star: 1,
    nstar: 1,
    translator: 1,
    publication: 1,
    category: 1,
    price: 1,
  });
  const data = {
    ...books.toObject(),
    _id: books._id.toString(),
  };
  return {
    props: { data },
    revalidate: 6000,
  };
}

export default Compo;
// {
//   star: 5,
//   nstar 1,
//   _id: '602b6a88cf619c1764f6441d',
//   title: 'title 2',
//   author: 'author 2',
//   image: 'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg'}:
