import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import ProductDetail from "../components/ProductDetail";

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      setItems(data);
    }

    fetchData();
  }, []);

  return (
    <Layout>
      <h1>Home</h1>
      <section className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card key={item.id} data={item} /> 
        ))}
      </section>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
