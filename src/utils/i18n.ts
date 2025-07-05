import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "home": "Home",
      "about": "About Us",
      "contact": "Contact Us",
      "services": "Services",
      "programs": "Programs",
      "gallery": "Gallery",
      "gallery.description": "Play&Grow Nursery photo gallery - View children's activities and events in a safe and fun educational environment",
      "enrollment": "Enrollment",
      
      "nursery": {
        "title": "Play&Grow Nursery",
        "subtitle": "A safe, fun, and educational environment for children",
        "description": "Play&Grow Nursery is a children's nursery that focuses on providing a safe, fun, and educational environment for children."
      },
      
      "nurseryServices": {
        "title": "Our Services",
        "subtitle": "We provide comprehensive childcare services with a focus on early education and child development",
        "childcare": "Child Care",
        "childcareDesc": "Professional childcare services in a safe and nurturing environment with qualified staff to ensure your child's comfort and safety throughout the day.",
        "earlyEducation": "Early Education",
        "earlyEducationDesc": "Comprehensive early education programs using the Montessori approach to develop children's cognitive, social, and emotional skills from an early age.",
        "recreationalActivities": "Recreational Activities",
        "recreationalActivitiesDesc": "Fun and educational recreational activities including arts, crafts, music, and sports to enhance creativity and physical development.",
        "healthyNutrition": "Healthy Nutrition",
        "healthyNutritionDesc": "Balanced nutrition programs and healthy activities to promote physical and mental well-being with carefully planned meals and snacks."
      },
      
      "features": {
        "title": "Nursery Features",
        "subtitle": "Discover the unique features that make our nursery a perfect place for your child's growth and development",
        "safeEnvironment": "Safe and comfortable environment",
        "safeEnvironmentDesc": "We provide a completely safe and secure environment designed specifically for children, with 24/7 supervision and child-proofed facilities to ensure your peace of mind.",
        "qualifiedTeachers": "Qualified teachers",
        "qualifiedTeachersDesc": "Our team consists of certified and experienced educators who are passionate about early childhood development and committed to nurturing each child's unique potential.",
        "customizedPrograms": "Planned educational programs",
        "customizedProgramsDesc": "We offer carefully designed educational programs tailored to different age groups, focusing on cognitive, social, and emotional development through play-based learning.",
        "indoorOutdoorActivities": "Indoor and outdoor activities",
        "indoorOutdoorActivitiesDesc": "Our facility includes both indoor and outdoor spaces where children can engage in various activities, from creative arts to physical play, promoting holistic development."
      },
      
      "benefits": {
        "title": "Nursery Benefits",
        "enhanceGrowth": "Enhance child development",
        "developSkills": "Develop child skills"
      },
      
      "montessori": {
        "title": "Montessori Education System",
        "description": "The Montessori education system is an educational approach that focuses on comprehensive child development, based on Maria Montessori's philosophy. The system aims to promote independence, discovery, and self-learning in children.",
        "principles": {
          "title": "Montessori Principles",
          "independence": "Independence: Encouraging children to make decisions and work independently",
          "discovery": "Discovery: Providing an educational environment that encourages discovery and exploration",
          "selfLearning": "Self-learning: Promoting self-learning and individual knowledge acquisition",
          "respect": "Respect: Fostering mutual respect between children and teachers"
        },
        "advantages": {
          "title": "Montessori Advantages",
          "criticalThinking": "Enhance critical thinking: Encouraging children to think critically and innovate",
          "lifeSkills": "Develop life skills: Teaching children life skills such as organization and arrangement",
          "selfConfidence": "Build self-confidence: Encouraging children to build self-confidence and independence"
        },
        "implementation": {
          "title": "Implementing Montessori in Nursery",
          "environment": "Specialized educational environment: Designing an educational environment that encourages discovery and learning",
          "trainedTeachers": "Trained teachers: Employing teachers trained in the Montessori approach",
          "diverseActivities": "Diverse educational activities: Providing diverse educational activities covering various fields"
        }
      },

      "viewmore": "View Details",
      "search": "Search",
      "explore": "Explore More",
      
      "footer": {
        "logo": {
          "alt": "Logo"
        },
        "about": {
          "description": "Play&Grow Nursery - Your trusted partner in providing the best educational environment for your children"
        },
        "social": {
          "facebook": "Facebook",
          "instagram": "Instagram"
        },
        "copyright": "All rights reserved to Play&Grow Nursery",
        "designBy": "Designed and developed by"
      },
      
      "contactt": {
        "title": "Contact Us",
        "subtitle": "We are always happy to communicate with you to answer your inquiries and provide our services",
        "form": {
          "title": "Send us a message",
          "name": "Name",
          "namePlaceholder": "Full Name",
          "phone": "Phone Number",
          "phonePlaceholder": "05XXXXXXXX",
          "email": "Email",
          "emailPlaceholder": "example@example.com",
          "subject": "Subject",
          "subjectPlaceholder": "Message Subject",
          "message": "Message",
          "messagePlaceholder": "Write your message here...",
          "submit": "Send",
          "successTitle": "Your message has been sent successfully",
          "successDescription": "We will reply to you as soon as possible"
        },
        "info": {
          "title": "Contact Information",
          "description": "You can contact us through the following contact methods, and we will respond to you as soon as possible.",
          "phone": "Phone Number",
          "email": "Email",
          "mapTitle": "Nursery Location"
        }
      },
      
     
      
      "aboutpage": {
        "section1": {
          "title": "About Play&Grow Nursery",
          "description": "Play&Grow Nursery is a children's nursery that focuses on providing a safe, fun, and educational environment for children. We offer comprehensive childcare services with a focus on early education and recreational activities.",
          "q": "Since our establishment, Play&Grow has been committed to meeting the needs of families by offering reliable and safe childcare services, carefully designed educational programs, ensuring quality care and excellent service."
        },
        "values": {
          "title": "Our Values",
          "features": [
            "Child safety first",
            "Trust and credibility",
            "Transparency in dealings",
            "Commitment to schedules",
            "Continuous development and smart growth"
          ]
        },
        "vision": {
          "title": "Our Vision",
          "data": "To be one of the leading nurseries in providing quality childcare and education, and to earn the trust of families through our commitment to safety, quality education, and continuous development."
        },
        "mission": {
          "title": "Our Mission",
          "data": [
            "To provide safe and healthy childcare services.",
            "To build long-term partnerships with families.",
            "To offer exceptional and prompt customer service.",
            "To contribute to child development through quality education and care."
          ]
        }
      }
    }
  },
  
  ar: {
    translation: {
      "home": "الرئيسية",
      "about": "من نحن",
      "contact": "اتصل بنا",
      "services": "الخدمات",
      "programs": "البرامج",
      "gallery": "المعرض",
      "gallery.description": "معرض صور حضانة Play&Grow - شاهد أنشطة وفعاليات الأطفال في بيئة تعليمية آمنة وممتعة",
      "enrollment": "التسجيل",
      
      "nursery": {
        "title": "حضانة Play&Grow",
        "subtitle": "بيئة تعليمية وترفيهية آمنة وممتعة للأطفال",
        "description": "حضانة Play&Grow هي حضانة للأطفال تركز على توفير بيئة تعليمية وترفيهية آمنة وممتعة للأطفال."
      },
      
      "nurseryServices": {
        "title": "خدماتنا",
        "subtitle": "نقدم خدمات شاملة لرعاية الأطفال مع التركيز على التعليم المبكر وتطوير الطفل",
        "childcare": "رعاية الأطفال",
        "childcareDesc": "خدمات رعاية مهنية للأطفال في بيئة آمنة ومحبة مع طاقم مؤهل لضمان راحة وسلامة طفلك طوال اليوم.",
        "earlyEducation": "تعليم مبكر",
        "earlyEducationDesc": "برامج تعليمية شاملة للطفولة المبكرة باستخدام نهج مونتسوري لتطوير المهارات المعرفية والاجتماعية والعاطفية للأطفال منذ سن مبكرة.",
        "recreationalActivities": "أنشطة ترفيهية",
        "recreationalActivitiesDesc": "أنشطة ترفيهية ممتعة وتعليمية تشمل الفنون والحرف اليدوية والموسيقى والرياضة لتعزيز الإبداع والتطور الجسدي.",
        "healthyNutrition": "تغذية صحية",
        "healthyNutritionDesc": "برامج تغذية متوازنة وأنشطة صحية لتعزيز الصحة الجسدية والعقلية مع وجبات ووجبات خفيفة مخططة بعناية."
      },
      
      "common": {
        "learnMore": "اعرف المزيد"
      },
      
      "features": {
        "title": "مميزات الحضانة",
        "subtitle": "اكتشف الميزات الفريدة التي تجعل حضانتنا المكان المثالي لنمو وتطور طفلك",
        "safeEnvironment": "بيئة آمنة ومريحة",
        "safeEnvironmentDesc": "نوفر بيئة آمنة ومحمية تماماً مصممة خصيصاً للأطفال، مع إشراف على مدار الساعة ومرافق مؤمنة للأطفال لضمان راحة بالكم.",
        "qualifiedTeachers": "معلمات مؤهلات",
        "qualifiedTeachersDesc": "يتكون فريقنا من معلمات معتمدات وذوات خبرة متحمسات لتطوير الطفولة المبكرة وملتزمات بتنمية الإمكانات الفريدة لكل طفل.",
        "customizedPrograms": "برامج تعليمية مخططة",
        "customizedProgramsDesc": "نقدم برامج تعليمية مصممة بعناية مناسبة لمختلف الفئات العمرية، مع التركيز على التطور المعرفي والاجتماعي والعاطفي من خلال التعلم القائم على اللعب.",
        "indoorOutdoorActivities": "أنشطة خارجية وداخلية",
        "indoorOutdoorActivitiesDesc": "تشمل مرافقنا مساحات داخلية وخارجية حيث يمكن للأطفال المشاركة في أنشطة متنوعة، من الفنون الإبداعية إلى اللعب الجسدي، مما يعزز التطور الشامل."
      },
      
      "benefits": {
        "title": "فوائد الحضانة",
        "enhanceGrowth": "تعزيز نمو الطفل",
        "developSkills": "تطوير مهارات الطفل"
      },
      
      "montessori": {
        "title": "نظام التعليم مونتسوري",
        "description": "نظام التعليم مونتسوري هو نهج تعليمي يركز على تطوير الطفل بشكل شامل، ويعتمد على فلسفة ماريا مونتسوري. يهدف النظام إلى تعزيز الاستقلالية والاكتشاف والتعلم الذاتي لدى الأطفال.",
        "principles": {
          "title": "مبادئ نظام مونتسوري",
          "independence": "الاستقلالية: تشجيع الأطفال على اتخاذ القرارات والعمل بشكل مستقل",
          "discovery": "الاكتشاف: توفير بيئة تعليمية تشجع على الاكتشاف والاستكشاف",
          "selfLearning": "التعلم الذاتي: تعزيز التعلم الذاتي والاكتساب الفردي للمعرفة",
          "respect": "الاحترام: تعزيز الاحترام المتبادل بين الأطفال والمعلمين"
        },
        "advantages": {
          "title": "مميزات نظام مونتسوري",
          "criticalThinking": "تعزيز التفكير النقدي: تشجيع الأطفال على التفكير النقدي والابتكار",
          "lifeSkills": "تطوير المهارات الحياتية: تعليم الأطفال مهارات حياتية مثل الترتيب والتنظيم",
          "selfConfidence": "تعزيز الثقة بالنفس: تشجيع الأطفال على بناء الثقة بالنفس والاستقلالية"
        },
        "implementation": {
          "title": "تطبيق نظام مونتسوري في الحضانة",
          "environment": "بيئة تعليمية مخصصة: تصميم بيئة تعليمية تشجع على الاكتشاف والتعلم",
          "trainedTeachers": "معلمات مدربات: توظيف معلمات مدربات على نهج مونتسوري",
          "diverseActivities": "أنشطة تعليمية متنوعة: تقديم أنشطة تعليمية متنوعة تشمل مختلف المجالات"
        }
      },

      "viewmore": "عرض التفاصيل",
      "search": "بحث",
      "explore": "اكتشف المزيد",
      
      "footer": {
        "logo": {
          "alt": "الشعار"
        },
        "about": {
          "description": "حضانة Play&Grow - شريكك الموثوق في توفير أفضل بيئة تعليمية لأطفالك"
        },
        "social": {
          "facebook": "فيسبوك",
          "instagram": "انستجرام"
        },
        "copyright": "جميع الحقوق محفوظة لحضانة Play&Grow",
        "designBy": "تصميم وتطوير بواسطة"
      },
      
      "contactt": {
        "title": "تواصل معنا",
        "subtitle": "نحن دائماً سعداء بالتواصل معكم للإجابة على استفساراتكم وتقديم خدماتنا",
        "form": {
          "title": "ارسل لنا رسالة",
          "name": "الاسم",
          "namePlaceholder": "الاسم الكامل",
          "phone": "رقم الجوال",
          "phonePlaceholder": "05XXXXXXXX",
          "email": "البريد الإلكتروني",
          "emailPlaceholder": "example@example.com",
          "subject": "الموضوع",
          "subjectPlaceholder": "موضوع الرسالة",
          "message": "الرسالة",
          "messagePlaceholder": "اكتب رسالتك هنا...",
          "submit": "إرسال",
          "successTitle": "تم إرسال رسالتك بنجاح",
          "successDescription": "سنقوم بالرد عليك في أقرب وقت ممكن"
        },
        "info": {
          "title": "معلومات التواصل",
          "description": "يمكنكم التواصل معنا من خلال وسائل الاتصال التالية، وسنقوم بالرد عليكم في أقرب وقت ممكن.",
          "phone": "رقم الجوال",
          "email": "البريد الإلكتروني",
          "mapTitle": "موقع الحضانة"
        }
      },
      
      
      
      "aboutpage": {
        "section1": {
          "title": "  حضانة Play&Grow",
          "description": "حضانة Play&Grow هي حضانة للأطفال تركز على توفير بيئة تعليمية وترفيهية آمنة وممتعة للأطفال. نقدم خدمات رعاية شاملة للأطفال مع التركيز على التعليم المبكر والأنشطة الترفيهية.",
          "q": "منذ تأسيسنا، حرصت Play&Grow على تلبية احتياجات الأسر من خلال تقديم خدمات رعاية موثوقة وآمنة للأطفال، مع برامج تعليمية مصممة بعناية، مما يضمن جودة الرعاية والخدمة الممتازة."
        },
        "values": {
          "title": "قيمنا",
          "features": [
            "سلامة الطفل أولاً",
            "الثقة والمصداقية",
            "الشفافية في التعامل",
            "الالتزام بالمواعيد",
            "التطوير المستمر والنمو الذكي"
          ]
        },
        "vision": {
          "title": "رؤيتنا",
          "data": "أن نكون من الحضانات الرائدة في تقديم رعاية وتعليم عالي الجودة للأطفال، وأن نحقق ثقة الأسر من خلال التزامنا بالسلامة والتعليم الجيد والتطوير المستمر."
        },
        "mission": {
          "title": "رسالتنا",
          "data": [
            "توفير خدمات رعاية آمنة وصحية للأطفال.",
            "بناء شراكات طويلة الأمد مع الأسر.",
            "تقديم خدمة عملاء متميزة وسريعة.",
            "المساهمة في تطوير الطفل من خلال التعليم والرعاية الجيدة."
          ]
        }
      }
    }
  }
};

i18next.use(initReactI18next).init({
  resources,
  fallbackLng: 'ar', 
  supportedLngs: ['en', 'ar'],
  debug: false,
  interpolation: {
    escapeValue: false, 
  },
});

export default i18next;
