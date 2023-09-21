import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "../ui/button";
import ProductsCarousel from "./ProductsCarousel";

const NewArrivals = () => {
  return (
    <div className="py-5">
      <h1 className="pb-4 pt-10 text-center font-rubik text-4xl">
        NEW ARRIVALS
      </h1>
      <ProductsCarousel />
      <div>
        <Button
          asChild
          variant={"outline"}
          className="text-md w-full rounded-[62px] p-8"
        >
          <Link href="/#">View All</Link>
        </Button>
      </div>
      <Separator className="" />
    </div>
  );
};

export default NewArrivals;
