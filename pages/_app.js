import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCoffee, faHeart } from "@fortawesome/free-solid-svg-icons";
import "../styles/globals.css";

import Layout from "../components/Layout";

library.add(fab, faHeart);

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
