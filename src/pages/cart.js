import Head from "next/head";
import React from "react";
import Cart from "../layouts/Cart";
import Layout from "../layouts/Layout";

const cart = () => {
  return (
    <div>
      <Head>
        <title>Cart | E - Commerce</title>
      </Head>

      <Layout>
        <Cart />
      </Layout>
    </div>
  );
};

export default cart;
