import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Products from "@/components/products";
import Reviews from "@/components/reviews";
import Gallery from "@/components/gallery";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Products />
        <Reviews />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
