import React, { useContext } from "react";
import { ShoppingCartContext } from "../context/Context";
import { XMarkIcon } from "@heroicons/react/24/solid";

function ProductDetail() {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      style={{
        width: "360px",
        height: "calc(100vh - 68px)",
        top: "68px",
      }}
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div className="cursor-pointer" onClick={() => context.closeProductDetail()}>
          <XMarkIcon className="h-6 w-6 text-black"></XMarkIcon>
        </div>
      </div>
    </aside>
  );
}

export default ProductDetail;
