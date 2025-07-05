import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";
import { Shield, GraduationCap, BookOpen, TreePine } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Advantage = () => {
  const { t } = useTranslation();

  const advantages = [
    {
      titleKey: 'features.safeEnvironment',
      descriptionKey: 'features.safeEnvironmentDesc',
      icon: <Shield className="h-8 w-8" />,
      color: 'bg-blue-500/10 text-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      titleKey: 'features.qualifiedTeachers',
      descriptionKey: 'features.qualifiedTeachersDesc',
      icon: <GraduationCap className="h-8 w-8" />,
      color: 'bg-green-500/10 text-green-600',
      bgColor: 'from-green-50 to-green-100'
    },
    {
      titleKey: 'features.customizedPrograms',
      descriptionKey: 'features.customizedProgramsDesc',
      icon: <BookOpen className="h-8 w-8" />,
      color: 'bg-purple-500/10 text-purple-600',
      bgColor: 'from-purple-50 to-purple-100'
    },
    {
      titleKey: 'features.indoorOutdoorActivities',
      descriptionKey: 'features.indoorOutdoorActivitiesDesc',
      icon: <TreePine className="h-8 w-8" />,
      color: 'bg-orange-500/10 text-orange-600',
      bgColor: 'from-orange-50 to-orange-100'
    }
  ];

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

  return (
    <section id="advantages" className="section-padding bg-gradient-to-br from-background to-secondary/5 relative overflow-hidden">
      {/* Decorative shapes for Advantage section */}
    
      <img
        src='/shape8.png'
        alt="شكل"
        className="hidden md:block absolute top-40 left-10 w-12 h-12  animate-wiggle z-10"
      />
      <img
        src='/shape10.png'
        alt="شكل"
        className="hidden md:block absolute bottom-20 right-16 w-14 h-14 animate-gentle-spin z-10"
      />
      <img
        src='/shape8.png'
        alt="شكل"
        className="hidden md:block absolute bottom-40 left-10 w-10 h-10 animate-drift z-10"
      />
     
   
      <img
        src='/shape10-1.png'
        alt="شكل"
        className="hidden md:block absolute bottom-1 left-10 w-10 h-10  animate-pulse z-10"
      />
      <img
        src='/shape8.png'
        alt="شكل"
        className="hidden md:block absolute top-1/4 right-1/6 w-11 h-11  animate-spin z-10"
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
            {t('features.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground"
          >
            {t('features.subtitle')}
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {advantages.map((advantage, index) => (
            <motion.div key={index} variants={item} className="group">
              <Card className={`overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border-0 bg-gradient-to-br ${advantage.bgColor} h-full`}>
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-2xl ${advantage.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {advantage.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    {t(advantage.titleKey)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {t(advantage.descriptionKey)}
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

export default Advantage;
