import SEO from "@/components/SEO";
import Contact from "@/components/sections/Contact";

const ContactPage = () => {
  return (
    <>
      <SEO 
        titleKey="contact"
        descriptionKey="contactt.subtitle"
      />
      <div className="pt-20">
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;
