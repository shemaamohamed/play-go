import SEO from "@/components/SEO";
import About from "@/components/sections/About";
import WhyUs from "../sections/WhyUs";
import Advantage from "../sections/Advantage";

const AboutUs = () => {
  return (
    <>
      <SEO 
        titleKey="about"
        descriptionKey="aboutpage.section1.description"
      />
      <About />
            <Advantage/>

      <WhyUs />
    </>
  );
};

export default AboutUs;
