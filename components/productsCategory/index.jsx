import Image from "next/image";
import { categoriesDetails } from "./categoriesDetails.js";
import { IoChevronBackOutline } from "react-icons/io5";
import Link from "next/link";

const ProductsCategory = () => {
  return (
    <div className="container mx-auto max-w-[80%]">
      <div className="my-5 text-2xl px-5 flex items-center mx-auto">
        <span>
          <IoChevronBackOutline />
        </span>
        <h1>دسته بندی ها</h1>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-6 grid-cols-2">
        {categoriesDetails.map((item) => (
          <div
            key={item.id}
            className="p-7 border border-gray-500 hover:border-2 hover:border-gray-800 delay-300"
          >
            <Link href={item.url}>
              <div className=" flex flex-col justify-center items-center text-2xl">
                <Image src={item.img} alt={item.name} />
                <span>{item.name}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCategory;
