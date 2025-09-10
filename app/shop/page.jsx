import { IoChevronBackOutline, IoPricetagsOutline } from "react-icons/io5";
import { categoriesDetails } from "@/components/productsCategory/categoriesDetails";
import { productsDetails } from "@/components/productsCarousel/productDetail";
import styles from "./index.css.module.css";
import Image from "next/image";

const page = () => {
  return (
    <div className="container mx-auto mt-5 grid grid-cols-4">
      <div className="col-span-1 bg-gray-100 hidden md:block">
        <div className="flex p-3 items-center">
          <span className="pl-1">
            <IoChevronBackOutline />
          </span>
          <h1>فیلتر ها :</h1>
        </div>
        <div>
          <ul className="">
            {categoriesDetails.map((item) => {
              return (
                <li
                  className="py-3 px-5 hover:bg-gray-300 cursor-pointer"
                  key={item.id}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="md:col-span-3 col-span-4">
        <div className="flex flex-col md:grid md:grid-cols-4">
          {productsDetails.map((product) => {
            return (
              <div
                key={product.id}
                className="hover:border hover:rounded-xl hover:cursor-pointer pt-3 border-gray-500"
              >
                <Image alt={product.title} src={product.img} />
                <div className="p-3">
                  <div>
                    <h1 className="text-xl mb-3">{product.title}</h1>
                    <h2 className="text-sm mb-3">{product.desc}</h2>
                  </div>
                  <div className="flex">
                    <span className="px-3">
                      <p>{product.price}</p>
                    </span>
                    <span className="pl-1">
                      <IoPricetagsOutline />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
