import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

import {
  Menu,
  Phone,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
const navItems = [
  { name: "home", to: "/" },
  { name: "about", to: "/about_us" },
  { name: "contact", to: "/contact" },
];    

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || "ar");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const closeMenu = () => {
      setIsOpen(false);
    };
  
    useEffect(() => {
      const handleScroll = () => {
        const offset = window.scrollY;
        setScrolled(offset > 50);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    setLang(newLang);
  };

  return (
      <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95  shadow-md backdrop-blur-sm"
          : "bg-white backdrop-blur-md"
      }`}>
      <div className="container-custom flex h-20 items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center pt-1 gap-2"
          aria-label="الشعار">
          <img
            security="true"
            src="/logo_professionals.png"
            alt="الشعار"
            className="h-32 py-1 w-32 object-cover"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-8">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="ml-8 last:ml-0"
                onClick={() => {
                  closeMenu();
                }}>
                <Link
                  to={item.to}
                  className={`relative  text-sm font-medium  py-2 px-4 rounded-md hover:bg-primary transition-all duration-500 hover:text-white`}
                  onClick={closeMenu}>
                                          {t(item.name)}

                  <span className="absolute -bottom-1 right-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground"
            >
            
          </Button>
           <Button variant="ghost" onClick={toggleLanguage} className="flex items-center gap-2">
        <Globe />
        <span>{lang === "en" ? "EN" : "AR"}</span>
      </Button>

          <Link
            to="/#contact"
            className="hidden lg:block">
            <Button className="flex items-center gap-2 bg-primary text-white">
              <Phone className="h-4 w-4" />
              <span>اتصل بنا</span>
            </Button>
          </Link>
     

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={toggleMenu}
            aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden lg:hidden">
            <nav className="container-custom pb-6">
              <ul className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}>
                    <Link
                      to={item.to}
                      className="block text-lg font-medium hover:text-primary"
                      onClick={closeMenu}>
                      {t(item.name)}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navItems.length * 0.1 }}>
                  <Link to="/#contact">
                    <Button className="w-full">
                      <Phone className="mr-2 h-4 w-4" />
                      <span>اتصل بنا</span>
                    </Button>
                  </Link>
                </motion.li>
             
              </ul>
            </nav>
          </motion.div>
        )}
      </ AnimatePresence>
    </header>
    
  );
};

export default Navbar;
