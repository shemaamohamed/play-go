
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
const Montessori = () => {
    const { t } = useTranslation();
  return (
       <section id="services" className="section-padding  relative overflow-hidden">
      {/* Decorative shapes for Services section */}
      <img
        src='/shape10-1.png'
        alt="شكل"
        className="hidden md:block absolute top-16 right-8 w-10 h-10  animate-float z-10"
      />
      <img
        src='/shape8.png'
        alt="شكل"
        className="hidden md:block absolute top-32 left-16 w-12 h-12  animate-wiggle z-10"
      />
     
      <img
        src='/shape8.png'
        alt="شكل"
        className="hidden md:block absolute bottom-40 left-8 w-10 h-10  animate-drift z-10"
      />
      <img
        src='/shape9.png'
        alt="شكل"
        className="hidden md:block absolute top-1/4 right-1/4 w-10 h-10  animate-bounce z-10"
      />
   
     
      <img
        src='/shape10-1.png'
        alt="شكل"
        className="hidden md:block absolute top-1/2 right-1/6 w-8 h-8  animate-spin z-10"
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
            {t('montessori.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground"
          >
            {t('montessori.description')}
          </motion.p>

          
        </div>

       
      </div>
    </section>
  )
}

export default Montessori