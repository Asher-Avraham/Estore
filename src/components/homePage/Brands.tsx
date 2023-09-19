import Image from "next/image";

import versace from "@/assets/images/homePage/versace.svg";
import gucci from "@/assets/images/homePage/gucci.svg";
import prada from "@/assets/images/homePage/prada.svg";
import zara from "@/assets/images/homePage/zara.svg";
import calvinklein from "@/assets/images/homePage/calvinklein.svg";

const Brands = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black p-6 md:flex-row ">
      <div className="flex gap-7 p-3">
        <Image src={versace} alt="versace logo" />
        <Image src={zara} alt="zara logo" />
        <Image src={gucci} alt="gucci logo" />
      </div>
      <div className="flex gap-7 p-3">
        <Image src={prada} alt="prada logo" />
        <Image src={calvinklein} alt="calvin klein logo" />
      </div>
    </div>
  );
};

export default Brands;
