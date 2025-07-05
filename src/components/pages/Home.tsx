import SEO from "@/components/SEO";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Gallery from "../sections/Gallery";
import Services from "../sections/Services";
import Advantage from "../sections/Advantage";
import Montessori from "../sections/Montessori";

const Home = () => {
  return (
    <>
      <SEO 
        titleKey="nursery.title"
        descriptionKey="nursery.description"
      />
      <Hero />
      <About />
            <Montessori/>

      <Advantage />
      <Gallery/>


      <Services />

      <Contact />
    </>
  );
};

export default Home;
