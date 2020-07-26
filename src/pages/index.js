import Head from "next/head";
import { useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../layouts/Layout";
import ProductCard from "../layouts/ProductCard";

export default function IndexPage() {
  const prodcuts = useSelector((state) => state.products);
  const [quantity, setQuantity] = useState(0);

  return (
    <div>
      <Layout>
        <Head>
          <title>E - Commerce</title>
        </Head>

        <div className="flex justify-evenly flex-wrap">
          {prodcuts.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </Layout>
    </div>
  );
}
