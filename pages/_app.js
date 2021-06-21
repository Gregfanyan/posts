import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import "../styles/globals.css";
import Layout from "../components/Layout";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
