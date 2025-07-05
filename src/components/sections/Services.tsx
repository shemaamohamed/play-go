import { motion } from 'framer-motion';
import {Heart, BookOpen, Gamepad2, Activity } from 'lucide-react';
import { Card, CardContent, CardDescription,CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Services = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      titleKey: 'nurseryServices.childcare',
      descriptionKey: 'nurseryServices.childcareDesc',
      icon: <Heart className="h-6 w-6" />,
      color: 'bg-red-500/10 text-red-500',
      image: '/31.png'
    },
    {
      titleKey: 'nurseryServices.earlyEducation',
      descriptionKey: 'nurseryServices.earlyEducationDesc',
      icon: <BookOpen className="h-6 w-6" />,
      color: 'bg-blue-500/10 text-blue-500',
      image: '/30.png'
    },
    {
      titleKey: 'nurseryServices.recreationalActivities',
      descriptionKey: 'nurseryServices.recreationalActivitiesDesc',
      icon: <Gamepad2 className="h-6 w-6" />,
      color: 'bg-green-500/10 text-green-500',
      image: '/29.png'
    },
    {
      titleKey: 'nurseryServices.healthyNutrition',
      descriptionKey: 'nurseryServices.healthyNutritionDesc',
      icon: <Activity className="h-6 w-6" />,
      color: 'bg-orange-500/10 text-orange-500',
      image: '/32.png'
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-background to-secondary/5 relative overflow-hidden">
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
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="title-section mx-auto"
          >
            {t('nurseryServices.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground"
          >
            {t('nurseryServices.subtitle')}
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item} className="group">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg dark:bg-card h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={t(service.titleKey)}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 right-4">
                    <div className={`rounded-full ${service.color} p-3`}>
                      {service.icon}
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{t(service.titleKey)}</CardTitle>
                </CardHeader>
                <CardContent className="text-base leading-relaxed h-[120px] w-full">
                  <CardDescription>
                    {t(service.descriptionKey)}
                  </CardDescription>
                </CardContent>
              
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;