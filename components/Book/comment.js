import useSWR, { mutate, trigger } from "swr";
import { useState } from "react";
import Popup from "reactjs-popup";
import Form from "../../components/Layout/Form";
import TimeAgo from "timeago-react";
import * as timeago from "timeago.js";
import fa from "timeago.js/lib/lang/fa";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((r) => r.json());
const Compo = ({ userId, bookId, img, name }) => {
  const router = useRouter();
  timeago.register("fa", fa);
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [form, showForm] = useState(false);
  const { data } = useSWR(`/api/comments/${bookId}/0/7`, fetcher);
  const handleCreateComnt = async (e) => {
    if (!userId) {
      showForm(true);
    }
    e.preventDefault();
    const userGot = data.find((w) => w.creator._id == userId);
    if (!userGot) {
      mutate(
        `/api/comments/${bookId}/0/7`,
        [
          ...data,
          {
            book: bookId,
            creator: { _id: userId, profileURL: img, username: name },
            date: Date.now(),
            text: text,
            _id: "21122222222222",
          },
        ],
        false
      );
      const res = await fetch("https://bookgram.vercel.app/api/createcomment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, userId, bookId }),
      });
      const data1 = await res.json();
      mutate(`/api/comments/${bookId}/0/7`);
    }
  };
  return (
    <>
      <>
        {!userId && <Form shouldshow="form" />}
        {userId && (
          <form
            onSubmit={handleCreateComnt}
            style={{ direction: "rtl" }}
            className="flex flex-col w-3/4 my-6 md:w-1/2"
          >
            <textarea
              rows="4"
              cols="50"
              maxLength="50"
              onChange={(event) => setText(event.target.value)}
              placeholder="نظر خود رو درمورد کتاب بنویس .... "
              className="border-2 border-gray-300 rounded-md my-3 focus:outline-none bg-gray-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-500"
            ></textarea>
            <button
              type="submit"
              className="bg-gray-100 p-3 rounded-sm dark:bg-gray-600 dark:text-gray-200 hover:bg-opacity-30"
            >
              ارسال
            </button>
          </form>
        )}
        {data &&
          data.map((e) => {
            return (
              <>
                <div
                  className="flex flex-col bg-white border-gray-200 border-2 rounded-md p-4 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 md:w-3/4"
                  style={{ direction: "rtl" }}
                >
                  <div className="flex justify-between">
                    <div className="flex flex-row p-3">
                      <div>
                        <img src={e.creator.profileURL} width="20"></img>
                      </div>
                      <div>
                        <h1 className="text-base">
                          <a href={`/user/${e.creator._id}`}>
                            {e.creator.username}
                          </a>
                        </h1>
                        <h1 className="text-sm">
                          {" "}
                          <TimeAgo datetime={e.date} locale="fa" />
                        </h1>
                      </div>
                    </div>
                    <div>
                      {userId && (
                        <Popup
                          trigger={<h1 className="text-base">پاسخ {` >>`}</h1>}
                          modal
                        >
                          <div className="border-2 border-gray-900 rounded-lg">
                            <div
                              className="flex flex-row"
                              style={{ direction: "rtl" }}
                            >
                              <div className="flex flex-col p-2 content-center tems-center bg-white pt-12">
                                <form
                                  className="flex flex-col p-2 content-center tems-center bg-white"
                                  onSubmit={async (s) => {
                                    s.preventDefault();
                                    const userGot = e.reply.find(
                                      (w) => w.userId == userId
                                    );
                                    const B = data.filter(
                                      (w) => w._id != e._id
                                    );
                                    const A = [
                                      ...B,
                                      {
                                        _id: e._id,
                                        book: e.book,
                                        creator: {
                                          profileURL: e.creator.profileURL,
                                          username: e.creator.username,
                                          _id: e.creator._id,
                                        },
                                        date: e.date,
                                        reply: [
                                          ...e.reply,
                                          {
                                            date: Date.now(),
                                            img: img,
                                            userId: userId,
                                            _id: "1",
                                            text: text1,
                                          },
                                        ],
                                        text: e.text,
                                      },
                                    ];
                                    if (!userGot) {
                                      mutate(
                                        `/api/comments/${bookId}/0/7`,
                                        A,
                                        false
                                      );
                                      const res = await fetch(
                                        "https://bookgram.vercel.app/api/replytocomment",
                                        {
                                          method: "POST",
                                          headers: {
                                            "Content-Type": "application/json",
                                          },
                                          body: JSON.stringify({
                                            userId,
                                            text1,
                                            name,
                                            img,
                                            _id: e._id,
                                          }),
                                        }
                                      );
                                      const data1 = await res.json();
                                      mutate(`/api/comments/${bookId}/0/7`);
                                    }

                                    router.reload();
                                  }}
                                >
                                  <textarea
                                    rows="4"
                                    cols="50"
                                    maxLength="50"
                                    onChange={(event) =>
                                      setText1(event.target.value)
                                    }
                                    placeholder="بازخورد خود را بنویسید"
                                  ></textarea>
                                  <button
                                    type="submit"
                                    className="bg-bookgram-btn p-2 w-full text-white"
                                  >
                                    ثبت
                                  </button>
                                </form>
                              </div>
                            </div>
                          </div>
                        </Popup>
                      )}
                      {!userId && <Form shouldshow="reply" />}
                      <div className="mr-4 m-3">
                        {userId == e.creator._id && (
                          <button
                            onClick={async (s) => {
                              s.preventDefault();
                              const IDD = e._id;
                              //   console.log({
                              //     data: data.filter((sss) => sss._id !== e._id),
                              //   });
                              mutate(
                                `/api/comments/${bookId}/0/7`,
                                data.filter((cc) => cc._id !== e._id),
                                false
                              );
                              const res = await fetch(
                                "https://bookgram.vercel.app/api/deletecommnt",
                                {
                                  method: "POST",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                  body: JSON.stringify({
                                    commentId: e._id,
                                  }),
                                }
                              );
                              const data1 = await res.json();
                              mutate(`/api/comments/${bookId}/0/7`);
                            }}
                          >
                            حذف
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>{e.text}</div>
                </div>
                <div>
                  {e.reply &&
                    e.reply.map((r) => {
                      return (
                        <>
                          <div
                            className="flex flex-col bg-gray-200 mr-10 mb-5 mt-2 rounded-md dark:bg-gray-700 dark:text-gray-100 md:w-3/4"
                            style={{ direction: "rtl" }}
                          >
                            <div className="flex justify-between">
                              <div className="flex flex-row p-3">
                                <div>
                                  <img src={r.img} width="20"></img>
                                </div>
                                <div>
                                  <h1 className="text-base">
                                    <a href={`/user/${e.creator._id}`}>
                                      {r.name}
                                    </a>
                                  </h1>
                                  <h1 className="text-sm">
                                    <TimeAgo datetime={r.date} locale="fa" />
                                  </h1>
                                </div>
                              </div>
                            </div>
                            <div>{r.text}</div>
                          </div>
                        </>
                      );
                    })}
                </div>
              </>
            );
          })}
      </>
    </>
  );
};

export default Compo;
