import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Branches from "../components/Branches";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Branches />
      <Footer />
    </main>
  );
}