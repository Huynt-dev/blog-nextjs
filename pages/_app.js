<<<<<<< HEAD
import Head from 'next/head';

import '../styles/globals.css';
import Layout from '../components/layout/layout';
=======
import Head from "next/head";
import "../styles/globals.css";
import Layout from "../components/layout/layout";
>>>>>>> blog-next-js

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
<<<<<<< HEAD
        <meta name='viewport' content='width=device-width, initial-scale=1' />
=======
        <meta name="viewport" content="width=device-width, initial-scale=1" />
>>>>>>> blog-next-js
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
