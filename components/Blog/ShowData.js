import Output from "editorjs-react-renderer";
import { useEffect } from "react";
const Post = ({ data }) => {
  const style = {
    header: {
      textAlign: "right",
    },
    image: {
      img: {
        maxHeight: "400px",
      },
      figure: {
        backgroundColor: "aliceblue",
        border: "1px solid #eee",
      },
      figcaption: {
        borderRadius: "5px",
      },
    },
    video: {
      video: {
        maxHeight: "400px",
      },
      figure: {
        backgroundColor: "aliceblue",
        border: "1px solid #eee",
      },
      figcaption: {
        borderRadius: "5px",
      },
    },
    embed: {
      video: {
        maxHeight: "400px",
      },
      figure: {
        justifyContent: "center",
      },
      figcaption: {
        borderRadius: "5px",
      },
    },
    paragraph: {
      textAlign: "right",
      cursor: "default",
    },
    list: {
      textAlign: "right",
    },
    checklist: {
      container: {},
      item: {},
      checkbox: {},
      label: {},
    },
    table: {
      table: {},
      tr: {},
      th: {},
      td: {},
    },
    quote: {
      container: {},
      content: {},
      author: {
        fontWeight: "bold",
      },
      message: {
        textAlign: "right",
      },
    },
    codeBox: {
      container: {
        width: "100%",
      },
      code: {
        boxSizing: "border-box",
      },
    },
    warning: {
      container: {
        width: "100%",
      },
      icon: {
        width: "30px",
      },
      title: {
        fontWeight: 500,
      },
      message: {
        fontSize: "14px",
      },
    },
    delimiter: {
      container: {},
      svg: {},
      path: {
        fill: "#231F20",
      },
    },
  };
  useEffect(() => {
    const allPath = document.querySelector("section");
    const arrayed = Object.entries(allPath.children);
    let result = [];
    arrayed.map((e) => {
      result.push(e[1]);
    });

    result.map((ee) => {
      if (ee.children[0] !== undefined && ee.children[0].nodeName == "A") {
        ee.style.color = "red";
      }
    });
  }, []);
  return (
    <section style={{ direction: "rtl" }} className="md:w-1/2 mx-auto w-full">
      <Output
        style={style}
        data={JSON.parse(
          data
            .split("")
            .map((e) => {
              if (e == "'") {
                return '"';
              } else {
                return e;
              }
            })
            .join("")
        )}
      />
    </section>
  );
};

export default Post;
// https://www.npmjs.com/package/editorjs-react-renderer
// {'time':1610012736691,'blocks':[{'type':'delimiter','data':{}}],'version':'2.19.1'}
