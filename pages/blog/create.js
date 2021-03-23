import React from "react";
import AuthContext from "../../context/auth-context";
import Layout from "../../components/Layout/Layout";
import withSession from "../../utils/session";
class Editor extends React.Component {
  static contextType = AuthContext;
  constructor(props) {
    super(props);
    this.editor = null;
    this.state = {
      tag1: "",
      tag2: "",
      tag3: "",
      title: "",
      body: "",
    };
  }
  async componentDidMount() {
    this.initEditor();
    setInterval(() => {
      const allPath = document.querySelectorAll("path");
      const arrayed = Object.entries(allPath);
      let result = [];
      arrayed.map((e) => {
        result.push(e[1]);
      });
      const hamechishode = result.slice(8, result.length);

      hamechishode.map((ee) => {
        return (ee.style.color = "black");
      });
    }, 1000);
  }

  initEditor = () => {
    const EditorJS = require("@editorjs/editorjs");
    const Header = require("@editorjs/header");
    const Table = require("@editorjs/table");
    const List = require("@editorjs/list");
    const Image = require("@editorjs/image");
    const Delimiter = require("@editorjs/delimiter");

    let content = null;
    if (this.props.data !== undefined) {
      content = this.props.data;
    }

    this.editor = new EditorJS({
      placeholder: "ی چیز بنویس...",
      holder: "editorjs",
      logLevel: "ERROR",
      tools: {
        delimiter: Delimiter,
        table: Table,
        list: List,
        image: {
          class: Image,
          config: {
            uploader: {
              async uploadByFile(file) {
                const formData = new FormData();
                formData.append("profilePicture", file);
                const resFile = await fetch("/api/upload", {
                  method: "POST",
                  body: formData,
                });
                const dataFile = await resFile.json();
                return dataFile;
              },
            },
          },
        },
        header: Header,
      },
      i18n: {
        messages: {
          ui: {
            blockTunes: {
              toggler: {
                "Click to tune": "تنظیمات بلاک",
              },
            },
            inlineToolbar: {
              converter: {
                "Convert to": "تبدیل شدن",
              },
            },
            toolbar: {
              toolbox: {
                Add: "اضافه کردن",
              },
            },
          },
          toolNames: {
            Image: "عکس",
            Text: "متن",
            Heading: "هدینگ",
            List: "لیست",
            Warning: "هشدار",
            Checklist: "چک لیست",
            Quote: "نظر",
            Code: "کد",
            Delimiter: "جدا کننده",
            "Raw HTML": "HTML-фрагмент",
            Table: "جدول",
            Link: "لینک",
            Marker: "ماژیک",
            Bold: "بلد",
            Italic: "ایتالیک",
            InlineCode: "کد",
          },
          tools: {
            warning: {
              Title: "هشدار",
              Message: "هشدار",
            },
            link: {
              "جایگزلری لینک": "جایگزاری لینک",
            },
            stub: {
              "بلاک درست نشان داده نمی شود": "میتوانید ....",
            },
          },
          blockTunes: {
            delete: {
              Delete: "حذف",
            },
            moveUp: {
              "Move up": "بره بالا",
            },
            moveDown: {
              "Move down": "بیاد پایین",
            },
          },
        },
      },
      data: content,
    });
  };
  async onSave(e) {
    e.preventDefault();
    let data = await this.editor.saver.save();
    // const userId = localStorage.getItem("userId");
    const title = data.blocks.find((e) => {
      return e.type == "header";
    }); // .data.text
    const body = data.blocks.find((e) => {
      return e.type == "paragraph";
    }); //data.text
    const image = data.blocks.find((e) => {
      return e.type == "image";
    }); // data.file.url

    if (title && body) {
      const data1 = JSON.stringify(data)
        .split("")
        .map((e) => {
          if (e == '"') {
            return "'";
          } else {
            return e;
          }
        })
        .join("");
      fetch("https://bookgram.vercel.app/api/createblog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: this.state.title,
          body: this.state.body,
          image: image.data.file.url,
          userId: this.props.user.userId,
          data1: data1,
          tags: [this.state.tag1, this.state.tag2, this.state.tag3],
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.sign == true) {
            location.assign("/blog");
          } else {
            alert("SORRY");
          }
        })
        .catch((err) => console.log(err));
    }
  }
  render() {
    return (
      <Layout>
        {/* Editor */}
        <h1 className="font-IranianSans text-2xl text-right my-5 dark:text-white">
          نوشته خود را بنویسید
        </h1>
        <div
          id={"editorjs"}
          onChange={(e) => this.onChange(e)}
          style={{ direction: "rtl" }}
          className="w-4/5 bg-gray-100 border-gray-400 border-2 mx-auto rounded-lg"
        ></div>

        {/* Tags */}
        <h1 className="font-IranianSans text-2xl text-right my-5 dark:text-white">
          برای نوشته خود تگ انتخاب کنید
        </h1>
        <div
          className="flex flex-col bg-gray-100 border-gray-400 border-2 mx-auto rounded-lg w-4/5"
          style={{ direction: "rtl" }}
        >
          <input
            placeholder="تگ 1"
            type="text"
            className="p-2 rounded-lg m-3 bg-gray-500 mb-2 md:w-1/3"
            onChange={(e) => this.setState({ tag1: e.target.value })}
            style={{ direction: "rtl" }}
          />
          <input
            placeholder="تگ 2"
            type="text"
            className="p-2 rounded-lg m-3 bg-gray-500 mb-2 md:w-1/3"
            onChange={(e) => this.setState({ tag2: e.target.value })}
            style={{ direction: "rtl" }}
          />
          <input
            placeholder="تگ 3"
            type="text"
            className="p-2 rounded-lg m-3 bg-gray-500 mb-2 md:w-1/3"
            onChange={(e) => this.setState({ tag3: e.target.value })}
            style={{ direction: "rtl" }}
          />
        </div>

        {/* body & title */}
        <h1 className="font-IranianSans text-2xl text-right my-5 dark:text-white">
          عنوان و بدنه نوشته رو وارد کنید
        </h1>
        <div
          className="flex flex-col bg-gray-100 border-gray-400 border-2 mx-auto rounded-lg w-4/5"
          style={{ direction: "rtl" }}
        >
          <input
            placeholder="عنوان"
            type="text"
            className="p-2 rounded-lg m-3 bg-gray-500 mb-2 md:w-2/3"
            onChange={(e) => this.setState({ title: e.target.value })}
            style={{ direction: "rtl" }}
          />
          <textarea
            placeholder="بدنه"
            type="text"
            className="p-2 rounded-lg m-3 bg-gray-500 mb-2 md:w-2/3"
            onChange={(e) => this.setState({ body: e.target.value })}
            style={{ direction: "rtl" }}
          />
        </div>

        <div className="flex flex-row justify-end rounded-lg w-4/5 mx-auto">
          <button
            onClick={(e) => this.onSave(e)}
            className="p-5 rounded-lg my-3 bg-gray-600 text-white font-Vazir"
          >
            انتشار
          </button>
        </div>
      </Layout>
    );
  }
}
export const getServerSideProps = withSession(async function ({ req, res }) {
  const user = req.session.get("user");
  if (!user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { user: user },
  };
});
export default Editor;
