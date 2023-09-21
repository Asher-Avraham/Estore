import ProductCard from "./ProductCard";

const ProductsCarousel = () => {
  return (
    <>
      <div className="flex flex-row">
        <ProductCard />
        {/* <ProductCard /> */}
      </div>
      <div className="h-96"></div>
    </>
  );
};

export default ProductsCarousel;
