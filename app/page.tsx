import Activities from "./components/Activities";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PricingSection from "./components/PricingSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Activities />
      <PricingSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
