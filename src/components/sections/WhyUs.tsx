import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";
import { BadgeCheck, ShieldCheck, Eye, Clock, TrendingUp } from "lucide-react";

const iconArray = [
  <BadgeCheck />,
  <ShieldCheck />,
  <Eye />,
  <Clock />,
  <TrendingUp />
];

const WhyUs = () => {
    const {t}= useTranslation();

  return (
    <section id="why-us" className="section-padding relative overflow-hidden">
      {/* Decorative shapes for WhyUs section */}
    
      <img
        src='/shape8.png'
        alt="شكل"
        className="hidden md:block absolute top-32 left-32 w-16 h-16  animate-scale-pulse z-10"
      />
    
    
    
      <img
        src='/shape11.png'
        alt="شكل"
        className="hidden md:block absolute bottom-0 left-1/3 w-14 h-14  animate-wiggle z-10"
      />
      <img
        src='/shape10-1.png'
        alt="شكل"
        className="hidden md:block absolute top-2/3 left-1/5 w-12 h-12 animate-pulse z-10"
      />
     

      <div className="container-custom">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="title-section mx-auto"
          >
            {t(`aboutpage.values.title`)}
          </motion.h2>
         
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {(t(`aboutpage.values.features`, { returnObjects: true }) as string[]).map((reason: string, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className=" flex flex-col  justify-center items-center rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:bg-card"
            >
              <div className="mb-3 text-xl font-semibold bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center">
                {iconArray[index]}
              </div>
              <p className="text-muted-foreground">{reason}</p>
            </motion.div>
          ))}
        </div>

      
      </div>
    </section>
  );
};

export default WhyUs;