import LastActive from "../../components/DashBoard/Index/LastActive";
import Container from "../../components/DashBoard/Index/Container";
import Amalkrd from "../../components/DashBoard/Index/Amalkrd";
import Menu from "../../components/DashBoard/Index/Menu";
import React, { useState, useEffect, useContext } from "react";
import Nav from "../../components/DashBoard/Index/Nav";
import dbConnect from "../../utils/dbConnect";
import Reader from "../../model/reader";
import Book from "../../model/Book";
import withSession from "../../utils/session";
import { data } from "autoprefixer";

const Compare = ({ data1, user }) => {
  return (
    <div className="bg-gray-50 font-Vazir dark:bg-gray-900 dashboard_zoom">
      <Nav image={user.profileURL} username={user.username} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-3">
          <Amalkrd />
        </div>
        <div className="lg:col-span-6">
          <Container data={JSON.parse(data1)} />
          <div className="h-20 lg:h-6 xl:h-20"></div>
          <LastActive data={JSON.parse(data1)} />
        </div>
        <div className="lg:col-span-3">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = withSession(async function ({ req, res }) {
  await dbConnect();
  const user = req.session.get("user");
  if (!user) {
    return {
      redirect: {
        source: "/",
        destination: "/login",
        permanent: true,
      },
    };
  }
  const usero = await Reader.find({ userId: user.userId })
    .sort({ date: -1 })
    .populate({
      path: "book",
      options: {
        select: { title: 1, image: 1 },
      },
    })
    .lean();
  let dataaaa;
  if (usero.length > 0) {
    dataaaa = usero;
  } else {
    dataaaa = [
      {
        date: [0],
        time: [0],
        pages: [0],
      },
    ];
  }
  return {
    props: { data1: JSON.stringify(dataaaa), user: user },
  };
});

export default Compare;
