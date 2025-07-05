import { motion, AnimatePresence } from "framer-motion";

const WhatsUp = () => {
  return (
    <AnimatePresence>
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.2 }}
        href="
        https://wa.me/ +962770999991"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-primary p-3 text-white shadow-lg hover:bg-primary/90 focus:outline-none"
        aria-label="WhatsApp"
      >
        <div className="h-6 w-6">
          <img
            src="/whats-up.svg"
            alt="
                      
                        WhatsApp Icon"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </motion.a>
    </AnimatePresence>
  );
};

export default WhatsUp;
