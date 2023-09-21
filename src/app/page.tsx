import Brands from "@/components/homePage/Brands";
import Hero from "@/components/homePage/Hero";
import NewArrivals from "@/components/homePage/NewArrivals";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Brands />
      <NewArrivals />
      <Footer />
    </>
  );
};

export default Home;
