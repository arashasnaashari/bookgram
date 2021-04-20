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
        <Head>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `!function(){function t(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,localStorage.getItem("rayToken")?t.src="https://app.raychat.io/scripts/js/"+o+"?rid="+localStorage.getItem("rayToken")+"&href="+window.location.href:t.src="https://app.raychat.io/scripts/js/"+o+"?href="+window.location.href;var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}var e=document,a=window,o="ae28aad5-980b-4794-9e9d-3d7c824b8626";"complete"==e.readyState?t():a.attachEvent?a.attachEvent("onload",t):a.addEventListener("load",t,!1)}();`,
            }}
          ></script>
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
