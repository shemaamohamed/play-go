import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import {
  LayoutDashboardIcon,
  LogInIcon,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";

const navItems = [
  { name: "الرئيسية", href: "/#home" },
  { name: "من نحن", href: "/#about" },
  { name: "خدماتنا", href: "/#services" },
  { name: "أعمالنا", href: "/#projects" },
  { name: "لماذا نحن", href: "/#why-us" },
  { name: "اتصل بنا", href: "/#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [valueToken] = useLocalStorage("token", "");

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-card/95 shadow-md backdrop-blur-sm"
          : "bg-transparent"
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
            className="h-32 py-1 w-h-32 object-cover"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="ml-8 last:ml-0"
                onClick={() => {
                  closeMenu();
                }}>
                <a
                  href={item.href}
                  className={`relative  text-sm font-medium  py-2 px-4 rounded-md hover:bg-primary transition-all duration-500 hover:text-white`}
                  onClick={closeMenu}>
                  {item.name}
                  <span className="absolute -bottom-1 right-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          

          <a
            href="/#contact"
            className="hidden lg:block">
            <Button className="flex items-center gap-2 bg-primary text-white">
              <Phone className="h-4 w-4" />
              <span>اتصل بنا</span>
            </Button>
          </a>
          {valueToken ? (
            <Link to="/admin/dashboard">
              <Button
                className="hidden md:flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-white shadow-lg transition-transform duration-300 hover:shadow-2xl border-0"
                style={{
                  backgroundClip: "border-box",
                  boxShadow: "0 4px 24px 0 rgba(120, 36, 255, 0.2)",
                }}>
                <LayoutDashboardIcon className="h-4 w-4 drop-shadow-glow" />
                <span className="font-bold tracking-wide drop-shadow-glow">
                  لوحة التحكم
                </span>
              </Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button
                variant={"outline"}
                className="hidden md:flex items-center gap-2 text-primary border-primary hover:bg-primary hover:text-white transition-all duration-500">
                <LogInIcon className="h-4 w-4" />
                <span>تسجيل الدخول</span>
              </Button>
            </Link>
          )}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
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
                    <a
                      href={item.href}
                      className="block text-lg font-medium hover:text-primary"
                      onClick={closeMenu}>
                      {item.name}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navItems.length * 0.1 }}>
                  <a href="/#contact">
                    <Button className="w-full">
                      <Phone className="mr-2 h-4 w-4" />
                      <span>اتصل بنا</span>
                    </Button>
                  </a>
                </motion.li>
                {valueToken ? (
                  <motion.li
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: (navItems.length + 1) * 0.1 }}>
                    <Link to="/admin/dashboard">
                      <Button className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-white shadow-lg transition-transform duration-300 hover:shadow-2xl border-0">
                        <LayoutDashboardIcon className="h-4 w-4 drop-shadow-glow" />
                        <span className="font-bold tracking-wide drop-shadow-glow">
                          لوحة التحكم
                        </span>
                      </Button>
                    </Link>
                  </motion.li>
                ) : (
                  <motion.li
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: (navItems.length + 1) * 0.1 }}>
                    <Link to="/login">
                      <Button className="w-full bg-primary text-white">
                        تسجيل الدخول
                      </Button>
                    </Link>
                  </motion.li>
                )}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
