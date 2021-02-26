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
    };
  }
  async componentDidMount() {
    this.initEditor();
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
          title: title.data.text,
          body: body.data.text,
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
        {console.log(this.props.user.userId)}
        <div
          id={"editorjs"}
          onChange={(e) => this.onChange(e)}
          style={{ direction: "rtl", backgroundColor: "lightgray" }}
        ></div>
        <button onClick={(e) => this.onSave(e)}>Save</button>
        <input
          placeholder="تگ 1"
          type="text"
          className="p-2 bg-gray-100 mb-2"
          onChange={(e) => this.setState({ tag1: e.target.value })}
        />
        <input
          placeholder="تگ 2"
          type="text"
          className="p-2 bg-gray-100 mb-2"
          onChange={(e) => this.setState({ tag2: e.target.value })}
        />
        <input
          placeholder="تگ 3"
          type="text"
          className="p-2 bg-gray-100 mb-2"
          onChange={(e) => this.setState({ tag3: e.target.value })}
        />
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
  console.log(user);
  return {
    props: { user: user },
  };
});
export default Editor;
