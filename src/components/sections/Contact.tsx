import { motion } from "framer-motion";
import {  Phone} from "lucide-react";

import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";

const contact = () => {
  const { t ,i18n } = useTranslation();

  return (
    <section
      id="contact"
      className="section-padding bg-secondary/4  lg:px-20 relative overflow-hidden"
    >
     
      <img
        src='/shape8.png'
        alt="شكل"
        className="hidden md:block absolute top-40 left-40 w-14 h-14  animate-gentle-spin z-10"
      />
    
      <img
        src='/shape9-1.png'
        alt="شكل"
        className="hidden md:block absolute bottom-0 right-1/4 w-20 h-20  animate-bounce z-10"
      />
    
    

      <div className="container-custom">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="title-section mx-auto"
          >
            {t("contactt.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground"
          >
            {t("contactt.subtitle")}
          </motion.p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:gap-16 ">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-between items-center gap-6 "
          >
            <div className="space-y-6" >
              <h3 className=" text-2xl font-bold">
                {t("contactt.info.title")}
              </h3>
              <p className=" text-muted-foreground">
                {t("contactt.info.description")}
              </p>

              <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">{i18n.language === 'ar' ? 'الخط الأرضي' : "Landline"}</h4>
                          
   <p dir="ltr" className="text-muted-foreground group-hover:text-secondary">
065810905                    </p>
                   
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">{t("contactt.info.phone")}</h4>
                     <a
  href="tel:+962799816092"
  target="_blank"
  rel="noopener noreferrer"
  className="  text-primary transition-colors hover:bg-primary group"
>
   <p dir="ltr" className="text-muted-foreground group-hover:text-secondary">
                       +962 7 9981 6092
                    </p>
</a>
                  
                  </div>
                </li>
                 <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <FaWhatsapp className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">{i18n.language === 'ar' ? 'واتساب' : 'whatsapp'}</h4>
                          <a
  href="https://wa.me/+962770999991"
  target="_blank"
  rel="noopener noreferrer"
  className="  text-primary transition-colors hover:bg-primary group"
>
   <p dir="ltr" className="text-muted-foreground group-hover:text-secondary">
                     +962 7 7099 9991
                    </p>
</a>
                   
                  </div>
                </li>
               
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center items-center h-full "
            >
                 <div className="overflow-hidden rounded-lg  w-full h-full  ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.747619180104!2d35.839308100000004!3d31.967742899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca19b64812387%3A0x249bcb3389c5875a!2sPlay%20And%20Grow%20Nursery!5e0!3m2!1sar!2seg!4v1751714958789!5m2!1sar!2seg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t("contactt.info.mapTitle")}
            ></iframe>
          </div>
            </motion.div>

       
        </div>
      </div>
    </section>
  );
};

export default contact;
