import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Hero = () => {
  const { t ,i18n } = useTranslation();

  const heroSlides = [
    {
      id: 1,
      backgroundImage: "/banner-shape-1.png",
      mainImage: "/168.png",
      title: t("nursery.title"),
      subtitle: t("nursery.subtitle"),
      description: t("nursery.description")
    },
    {
      id: 2,
      backgroundImage: "/banner-shape-1.png",
      mainImage: "/169.png",
      title: t("nurseryServices.title"),
      subtitle: t("nurseryServices.childcare"),
      description: t("benefits.enhanceGrowth") + " " + t("benefits.developSkills")
    },
     {
      id: 3,
      backgroundImage: "/banner-shape-1.png",
      mainImage: "/200.png",
      title: t("features.title"),
      subtitle: t("features.safeEnvironment"),
      description: t("features.qualifiedTeachers") + " " + t("features.customizedPrograms")
    },
    {
      id: 4,
      backgroundImage: "/banner-shape-1.png",
      mainImage: "/201.png",
      title: t("montessori.title"),
      subtitle: t("montessori.principles.title"),
      description: t("montessori.principles.independence")
    },
     {
      id: 5,
      backgroundImage: "/banner-shape-1.png",
      mainImage: "/202.png",
      title: t("montessori.advantages.title"),
      subtitle: t("montessori.advantages.criticalThinking"),
      description: t("montessori.advantages.selfConfidence")
    },
    
  
   
  ];

  return (
    <div
      id="home"
      className="relative w-full h-[150vh] lg:h-[100vh] pt-20 overflow-hidden"
       style={{ width: "100%",
          direction : i18n.language ==='ar' ?'rtl':'ltr'
         }}
     
    >
      <img
        src='/shape10-1.png'
        alt="شكل"
        className="hidden md:block absolute top-40 right-10 w-12 h-12 opacity-60 animate-scale-pulse z-10"
      />
      <img
        src='/shape8.png'
        alt="شكل"
        className="hidden md:block absolute top-40 left-20 w-8 h-8 opacity-50 animate-drift z-10"
      />
      <img
        src='/shape10.png'
        alt="شكل"
        className="hidden md:block absolute bottom-20 right-20 w-10 h-10 opacity-70 animate-gentle-spin z-10"
      />
      <img
        src='/shape8.png'
        alt="شكل"
        className="hidden md:block absolute bottom-32 left-10 w-6 h-6 opacity-40 animate-float z-10"
      />
      <img
        src='/shape9.png'
        alt="شكل"
        className="hidden md:block absolute top-60 left-1/2 w-14 h-14 opacity-50 animate-bounce z-10"
      />
      <img
        src='/shape11.png'
        alt="شكل"
        className="hidden md:block absolute top-1/2 right-5 w-9 h-9 opacity-60 animate-wiggle z-10"
      />
      <img
        src='/shape10-1.png'
        alt="شكل"
        className="hidden md:block absolute bottom-10 left-1/3 w-11 h-11 opacity-45 animate-pulse z-10"
      />
      <img
        src='/shape8.png'
        alt="شكل"
        className="hidden md:block absolute top-20 right-1/3 w-7 h-7 opacity-35 animate-spin z-10"
      />

      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active'

        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full"
         style={{ width: "100%",
          direction : i18n.language ==='ar' ?'rtl':'rtl'
         }}
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full relative">
              <div className="relative flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={slide.backgroundImage}
                    alt="شكل"
                    className="absolute max-w-[900px] w-full transition-all duration-300 ease-in-out move-up-down h-[400px] object-contain z-0"
                  />
                 
                  <img
                    src={slide.mainImage}
                    alt="أم وطفلة"
                    className="relative z-20 max-h-[350px] object-contain move-up-down"
                  />
                </div>
               
                <img
                  src="/slider-shape-1.png"
                  alt="شكل"
                  className="absolute right-0 -bottom-10 max-w-[300px] transition-all duration-300 ease-in-out move-up-down h-[300px] z-0 object-contain"
                />
              </div>

              <div className="flex items-center  px-4 lg:px-8"
               style={{
          direction : i18n.language ==='ar' ?'rtl':'ltr'
         }}
              >
                <div className="  max-w-lg">
                  <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-4">
                    {slide.title}
                  </h1>
                  <h2 className="text-xl lg:text-2xl font-semibold text-secondary mb-6">
                    {slide.subtitle}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {slide.description}
                  </p>
      
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
           

 

      {/* Custom Pagination Styles */}
      <style>{`
        .swiper-pagination {
          bottom: 60px !important;
        }
        
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #ec9225;
          opacity: 1;
          margin: 0 6px;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active {
          background:#893f9f;
          transform: scale(1.2);
        }
        
        .swiper-pagination-bullet:hover {
          background: rgba(255, 255, 255, 0.8);
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default Hero;
