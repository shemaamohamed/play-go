import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  titleKey?: string;
  descriptionKey?: string;
  customTitle?: string;
  customDescription?: string;
  keywords?: string;
  image?: string;
}

const SEO = ({ 
  titleKey, 
  descriptionKey, 
  customTitle, 
  customDescription, 
  keywords, 
  image = "/168.png" 
}: SEOProps) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  // Default titles and descriptions based on current page
  const getPageDefaults = () => {
    const path = location.pathname;
    
    if (path === '/' || path === '/home') {
      return {
        titleKey: 'nursery.title',
        descriptionKey: 'nursery.description',
        keywords: i18n.language === 'ar' 
          ? 'حضانة أطفال, تعليم مبكر, رعاية أطفال, أنشطة ترفيهية, مونتسوري, تغذية صحية, بيئة آمنة, معلمات مؤهلات, تطوير مهارات الطفل'
          : 'nursery, childcare, early education, montessori, children activities, healthy nutrition, safe environment, qualified teachers, child development'
      };
    } else if (path === '/about_us') {
      return {
        titleKey: 'about',
        descriptionKey: 'aboutpage.section1.description',
        keywords: i18n.language === 'ar'
          ? 'عن الحضانة, رؤيتنا, رسالتنا, قيمنا, فريق العمل, تاريخ الحضانة, خبراتنا في رعاية الأطفال'
          : 'about nursery, our vision, our mission, our values, team, nursery history, childcare experience'
      };
    } else if (path === '/services') {
      return {
        titleKey: 'services',
        descriptionKey: 'nurseryServices.title',
        keywords: i18n.language === 'ar'
          ? 'خدمات الحضانة, رعاية الأطفال, تعليم مبكر, أنشطة ترفيهية, تغذية صحية, برامج تعليمية, نظام مونتسوري'
          : 'nursery services, childcare, early education, recreational activities, healthy nutrition, educational programs, montessori system'
      };
    } else if (path === '/contact') {
      return {
        titleKey: 'contact',
        descriptionKey: 'contactt.subtitle',
        keywords: i18n.language === 'ar'
          ? 'تواصل معنا, عنوان الحضانة, أرقام التواصل, موقع الحضانة, الاستفسارات, التسجيل'
          : 'contact us, nursery address, contact numbers, nursery location, inquiries, registration'
      };
    } else if (path === '/gallery') {
      return {
        titleKey: 'gallery',
        descriptionKey: 'gallery.description',
        keywords: i18n.language === 'ar'
          ? 'معرض الصور, صور الحضانة, أنشطة الأطفال, فعاليات الحضانة, بيئة تعليمية, لحظات سعيدة'
          : 'photo gallery, nursery photos, children activities, nursery events, educational environment, happy moments'
      };
    }
    
    return {
      titleKey: 'nursery.title',
      descriptionKey: 'nursery.description',
      keywords: i18n.language === 'ar' 
        ? 'حضانة أطفال, تعليم مبكر, رعاية أطفال'
        : 'nursery, childcare, early education'
    };
  };

  const defaults = getPageDefaults();
  const finalTitleKey = titleKey || defaults.titleKey;
  const finalDescriptionKey = descriptionKey || defaults.descriptionKey;
  const finalKeywords = keywords || defaults.keywords;

  const title = customTitle || (finalTitleKey ? t(finalTitleKey) : '');
  const description = customDescription || (finalDescriptionKey ? t(finalDescriptionKey) : '');
  
  const siteName = i18n.language === 'ar' ? 'حضانة Play&Grow' : 'Play&Grow Nursery';
  const fullTitle = title ? `${title} - ${siteName}` : siteName;
  
  const currentUrl = `https://www.playandgrowjo.com${location.pathname}`;

  return (
    <Helmet>
      <html lang={i18n.language} dir={i18n.language === 'ar' ? 'rtl' : 'ltr'} />
      
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={finalKeywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={i18n.language === 'ar' ? 'ar_AR' : 'en_US'} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="author" content={siteName} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={currentUrl} />
      
      {/* Alternative languages */}
      <link rel="alternate" hrefLang="ar" href={`https://www.playandgrowjo.com${location.pathname}`} />
      <link rel="alternate" hrefLang="en" href={`https://www.playandgrowjo.com${location.pathname}`} />
      <link rel="alternate" hrefLang="x-default" href={`https://www.playandgrowjo.com${location.pathname}`} />
    </Helmet>
  );
};

export default SEO;
