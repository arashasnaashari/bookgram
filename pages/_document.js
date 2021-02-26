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
        </Head>
        <body className="bg-bookgram container mx-auto p-2 md:p-12 dark:bg-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
