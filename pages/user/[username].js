import User from "../../model/User";
import dbConnect from "../../utils/dbConnect";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";
import AuthContext from "../../context/auth-context";
import React, { useState, useContext } from "react";
import useUser from "../../utils/useUser";
const fetcher = (url) => fetch(url).then((r) => r.json());

const Compo = ({ data }) => {
  // const context = useContext(AuthContext);
  const { user, mutateUser } = useUser();
  const [err, showErr] = useState(false);
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

  return (
    <Layout>
      <div style={{ direction: "rtl" }}>
        <pre>{console.log(JSON.parse(data))}</pre>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  await dbConnect();

  const data = await User.find().select({
    username: 1,
  });
  const paths = data.map((e) => ({
    params: {
      username: e.username.toString(),
    },
  }));
  return { paths: paths, fallback: true };
}

export async function getStaticProps({ params: { username } }) {
  await dbConnect();
  const newUsername = username.substring(1);
  console.log(newUsername);
  const users = await User.find({ username: newUsername })
    .select({
      username: 1,
      profileURL: 1,
    })
    .lean();
  // .populate({
  //   path: "creator",
  //   options: {
  //     select: { username: 1, profileURL: 1 },
  //   },
  // });
  // const data = {
  //   ...users.toObject(),
  //   _id: users._id.toString(),
  //   // creator: {
  //   //   _id: users.creator._id.toString(),
  //   //   username: users.creator.username,
  //   //   profileURL: users.creator.profileURL,
  //   // },
  // };
  return {
    props: { data: JSON.stringify(users) },
    revalidate: 6,
  };
}

export default Compo;
