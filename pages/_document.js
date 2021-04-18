import Document, { Html, Head, Main, NextScript } from "next/document";
import { useRouter } from "next/router";

// const Compo = ({ children }) => {
//   const router = useRouter();

//   return (
//     <>
//       {router.asPath.split("/")[1] == "dashboard" && (
//         <body className="bg-bookgram container mx-auto p-2 md:p-12 dark:bg-black">
//           s
//         </body>
//       )}
//       {!router.asPath.split("/")[1] == "dashboard" && (
//         <body className="bg-bookgram container mx-auto p-2 md:p-12 dark:bg-black">
//           <Main />
//           <NextScript />
//         </body>
//       )}
//     </>
//   );
// };
class MyDocument extends Document {
  // componentDidMount() {
  //   console.log(window.location.pathname);
  // }
  render() {
    return (
      <Html lang="fa">
        {/* className="dark" */}
        <Head>
          <link rel="shortcut icon" href="/vercel.svg" />
          <script type="text/javascript">
            if (typeof window !== "undefined"){" "}
            {
              ((window.$crisp = []),
              (window.CRISP_WEBSITE_ID =
                "35a6cabe-2b02-430b-83f5-052512dee25d"),
              (function () {
                (d = document),
                  (s = d.createElement("script")),
                  (s.src = "https://client.crisp.chat/l.js"),
                  (s.async = 1),
                  d.getElementsByTagName("head")[0].appendChild(s);
              })())
            }
          </script>
        </Head>

        <body className="bg-bookgram container mx-auto p-2 md:p-12 dark:bg-black overflow-x-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
