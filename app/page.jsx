import Hero from "@/components/hero";
import ProductsCarousel from "@/components/productsCarousel";
import ProductsCategory from "@/components/productsCategory";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />
      {/* Products */}
      <ProductsCarousel />
      {/* Products Categories */}
      <ProductsCategory />
    </>
  );
}
