import React, { useContext } from "react";
import { ShoppingCartContext } from "../context/Context";
import OrderCard from "./OrderCard";
import { XMarkIcon } from "@heroicons/react/24/solid";

function CheckoutSideMenu() {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      style={{
        width: "360px",
        height: "calc(100vh - 68px)",
        top: "68px",
      }}
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div
          className="cursor-pointer"
          onClick={() => context.closeCheckoutSideMenu()}
        >
          <XMarkIcon className="h-6 w-6 text-black"></XMarkIcon>
        </div>
      </div>
      <div className="px-6">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
          />
        ))}
      </div>
    </aside>
  );
}

export default CheckoutSideMenu;
