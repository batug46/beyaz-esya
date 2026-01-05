import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import Advantages from "@/components/Advantages";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollReveal />
      <Header />
      <Hero />
      <Categories />
      <Products />
      <Advantages />
      <Newsletter />
      <Footer />
    </main>
  );
}
