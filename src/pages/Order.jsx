import React, { useContext } from "react";
import { ShoppingCartContext } from "../context/Context";
import Layout from "../components/Layout";
import OrderCard from "../components/OrderCard";

function Order() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex flex-col w-80">
        {context.order?.slice(-1)[0].products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
          />
        ))}
      </div>
    </Layout>
  );
}

export default Order;
