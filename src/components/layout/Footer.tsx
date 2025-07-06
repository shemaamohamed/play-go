import { Facebook, Instagram } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="relative pt-16 ">
      <div className="container-custom">
        <div className="grid gap-12  lg:grid-cols-2">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                security="true"
                src="/logo_professionals.png"
                alt={t("footer.logo.alt")}
                className="h-32 w-h-32 object-cover"
              />
            </div>
            <p className="text-muted-foreground">
              {t("aboutpage.section1.description")}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/plyandgrow/"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white"
                aria-label={t("footer.social.facebook")}
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/playandgrowpreschool"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white"
                aria-label={t("footer.social.instagram")}
              >
                <Instagram className="h-5 w-5" />
              </a>
             <a
  href="https://wa.me/+962770999991"
  target="_blank"
  rel="noopener noreferrer"
  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white"
  aria-label={t("footer.social.whatsapp")}
>
  <FaWhatsapp className="h-5 w-5" />
</a>
            </div>
          </div>

        

     
        </div>

        <hr className="my-8 border-muted" />

        <div className="flex flex-col items-center justify-between gap-1 py-6 text-center md:flex-row md:text-right">
          <p className="text-muted-foreground">
            &copy; {currentYear} {t("footer.copyright")}
          </p>
          <p className="text-sm text-muted-foreground">
            {t("footer.designBy")}{" "}
            <a
              href="https://mayazin.net/"
              className="font-medium text-primary hover:underline"
            >
              MAYAZIN
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
