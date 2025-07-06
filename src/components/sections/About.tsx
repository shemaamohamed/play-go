import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowDown } from "lucide-react";




const About = () => {
  const {t}= useTranslation();
  return (
    <section
      id="about"
      className=" w-full  section-padding relative overflow-hidden bg-white  py-6"
    >
    
      <div className=" relative container-custom">
             <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className=" mx-auto m-auto text-center flex justify-center items-center mb-12 text-3xl md:text-4xl lg:text-5xl font-bold text-primary"
          >
            {t("aboutpage.section1.title")}
          </motion.h2>
          <img
            src='/shape10-1.png'
            alt="شكل"
            className="hidden md:block absolute bottom-0 right-0 -translate-x-1/2 w-1/2 max-w-[50px] animate-float"
          />
           <img
            src='/shape8.png'
            alt="شكل"
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-1/2 max-w-[50px] animate-wiggle"
          />
            <img
            src='/shape8.png'
            alt="شكل"
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-1/2 max-w-[50px] animate-scale-pulse"
          />
          <img
            src='/shape10-1.png'
            alt="شكل"
            className="hidden md:block absolute top-0 left-0 translate-x-1/2 w-1/2 max-w-[50px] animate-drift"
          />
          <img
          src="/shape10.png"
          alt="شكل"
          className="hidden md:block absolute top-0 right-0 -translate-x-1/2 w-1/2 max-w-[50px] animate-gentle-spin"
        />
        <img
          src="/shape10.png"
          alt="شكل"
          className="hidden md:block absolute bottom-0 left-0 translate-x-1/2 w-1/2 max-w-[50px] animate-bounce"
             />
      
      
      
        
                        

        

        <div className="flex flex-col  items-center gap-8 max-w-3xl justify-center m-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className=" aspect-square overflow-hidden rounded-2xl">
              <img
                src="/179.png"
                alt="فريق العمل"
                className="h-[200px] w-[200px] object-contain"
              />

             
            </div>

          
          </motion.div>
         

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
          
          

            <p className="mb-6 text-muted-foreground">
                         {t("aboutpage.section1.description")}

            </p>
             <p className="mb-6 text-muted-foreground">
                         {t("aboutpage.section1.q")}

            </p>

          

            
            
          </motion.div>
        </div>
    
      </div>
            <a
        href="#advantages"
        className="absolute bottom-0 left-1/2 flex -translate-x-1/2 animate-bounce flex-col items-center justify-center z-10"
        aria-label={t('hero.scrollDown', 'انتقل إلى الأسفل')}
      >
        <span className="mb-2 text-sm text-secondary drop-shadow-lg">
          {t('hero.discoverMore', 'اكتشف المزيد')}
        </span>
        <ArrowDown className="h-5 w-5 text-secondary drop-shadow-lg" />
      </a>
    </section>
  );
};

export default About;
