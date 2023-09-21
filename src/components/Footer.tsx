import socials from "@/assets/svgs/footer/Socials.svg";
import applepay from "@/assets/svgs/footer/applepay.svg";
import googlepay from "@/assets/svgs/footer/googlepay.svg";
import mastercard from "@/assets/svgs/footer/mastercard.svg";
import paypal from "@/assets/svgs/footer/paypal.svg";
import visa from "@/assets/svgs/footer/visa.svg";
import logo from "@/assets/svgs/logo.svg";
import Image from "next/image";
import { Separator } from "./ui/separator";
const Footer = () => {
  return (
    <footer className=" bg-homeGray p-4">
      <div className="">
        <Image src={logo} alt="logo" />
        <p className=" py-2 text-sm font-thin">
          We have clothes that suits your style and which you are proud to wear.
          From women to men.
        </p>
        <Image
          src={socials}
          alt="twitter facebook instagram github"
          className="py-2 pb-4"
        />
      </div>
      <div className="flex gap-24">
        <div className="">
          <h2 className="py-1">COMPANY</h2>
          <p className="py-2 text-sm font-extralight">About</p>
          <p className="py-2 text-sm font-extralight">Features</p>
          <p className="py-2 text-sm font-extralight">Works</p>
          <p className="py-2 text-sm font-extralight">Career</p>
        </div>
        <div>
          <h2 className="py-1">HELP</h2>
          <p className="py-2 text-sm font-extralight">Customer Support</p>
          <p className="py-2 text-sm font-extralight">Delivery Details</p>
          <p className="py-2 text-sm font-extralight">Terms & Conditions</p>
          <p className="py-2 text-sm font-extralight">Privacy Policy</p>
        </div>
      </div>
      <div className="flex gap-14 py-3">
        <div>
          <h2 className="py-1">FAQ</h2>
          <p className="py-2 text-sm font-extralight">Account</p>
          <p className="py-2 text-sm font-extralight">Manage Deliveries</p>
          <p className="py-2 text-sm font-extralight">Orders</p>
          <p className="py-2 text-sm font-extralight">Payments</p>
        </div>
        <div>
          <h2 className="py-1">RESOURCES</h2>
          <p className="py-2 text-sm font-extralight">Free eBooks</p>
          <p className="py-2 text-sm font-extralight">Development Tutorial</p>
          <p className="py-2 text-sm font-extralight">How to - Blog</p>
          <p className="py-2 text-sm font-extralight">Youtube Playlist</p>
        </div>
      </div>
      <Separator />
      <div className="flex flex-col items-center p-3">
        <h4 className="p-2 text-sm font-thin">
          Shop.co © 2000-2023. All Rights Reserved
        </h4>
        <div className="flex">
          <Image src={visa} alt="visa" />
          <Image src={mastercard} alt="mastercard" />
          <Image src={paypal} alt="paypal" />
          <Image src={applepay} alt="applepay" />
          <Image src={googlepay} alt="googlepay" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
