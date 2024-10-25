import BannerSection from "../components/home/BannerSection";
import CardsSection from "../components/home/CardsSection";
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <BannerSection />
      <CardsSection />
      <Footer />
    </div>
  );
};

export default Home;
