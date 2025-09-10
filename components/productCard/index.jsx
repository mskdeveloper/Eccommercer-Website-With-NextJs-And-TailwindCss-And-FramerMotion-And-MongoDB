import React from "react";
import { IoPricetagsOutline, IoCart } from "react-icons/io5";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/app/lib/cartSlice";

const ProductCard = ({ id, img, title, desc, price }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = cartItems.some((items) => items.id === id);
  const numericPrice =
    typeof price === "string"
      ? parseFloat(price.replace("$", "")) || 0
      : number(price) || 0;

  const handleToggleCart = () => {
    if (isInCart) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(addToCart({ id, img, title, price: numericPrice, quantity: 1 }));
    }
  };
  return (
    <div>
      <div>
        <Image alt={title} src={img} />
      </div>
      <div className="flex flex-col gap-3 px-3">
        <h2 className="text-xl">{title}</h2>
        <p>{desc}</p>
        <div className="flex justify-between  items-center">
          <button
            onClick={handleToggleCart}
            className="text-xl cursor-pointer text-green-700 hover:text-green-500 hover:bg-gray-100 p-3 rounded-full"
          >
            <IoCart />
          </button>
          <div className="flex justify-end gap-3 items-center">
            <span className=" text-xl">{price}</span>
            <span className="text-red-500">
              <IoPricetagsOutline />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
