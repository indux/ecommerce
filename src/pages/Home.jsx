import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";

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
        {items?.slice(0, 40).map((item) => (
          <Card key={item.id} data={item} /> 
        ))}
      </section>
    </Layout>
  );
}

export default Home;
