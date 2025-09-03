import Image from "next/image";
import banner from "@/public/images/hero/banner.jpg";
import banner1 from "@/public/images/hero/banner1.jpg";
import banner2 from "@/public/images/hero/banner2.jpg";

const Hero = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-3 justify-between m-auto gap-1 mt-3 w-[90%]">
      <div className="col-span-2 ">
        <Image className="w-full rounded-2xl" alt="" src={banner} />
      </div>
      <div className="">
        <div className="">
          <Image className="w-full rounded-2xl pb-1" alt="" src={banner1} />
        </div>
        <div className="">
          <Image className="w-full rounded-2xl" alt="" src={banner2} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
