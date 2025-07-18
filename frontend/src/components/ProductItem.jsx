import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency, products } = useContext(ShopContext);
  const product = products.find((product) => product._id === id);
  if (!product) return null;
  const { finalPrice, discountPercent } = product;
  // const finalPrice = calculateFinalPrice(originalPrice);
  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="relative overflow-hidden group">
        {discountPercent > 0 && (
          <span className="absolute top-[18px] right-1.5 transform rotate-45 bg-red-500 text-white text-md font-bold py-0.5 px-[15px] rounded-md">
            sale
          </span>
        )}
        <div>
          <img
            className="w-full h-auto hover:scale-110 transition ease-in-out"
            src={image[0]}
            alt=""
          />
        </div>
      </div>

      <p className="pt-3 pb-1 text-sm">{name}</p>
      <div className="flex flex-row gap-2">
        <p className="text-sm font-medium">
          {currency}
          {Math.round(finalPrice)}
        </p>
        {discountPercent > 0 && (
          <p className="text-sm line-through text-gray-400">{price}</p>
        )}
        {discountPercent > 0 && (
          <p className="text-sm text-green-500">{discountPercent}% Off</p>
        )}
      </div>
    </Link>
  );
};

export default ProductItem;
