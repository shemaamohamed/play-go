import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
const workImages = [
  "/green(1).jpeg",
  "/green(2).jpeg",
  "/green(3).jpeg",
  "/green(4).jpeg",
  "/green(5).jpeg",
  "/green(6).jpeg",
  "/green(7).jpeg",
  "/green(8).jpeg",
  "/green(9).jpeg",
  "/green(10).jpeg",
  "/green(11).jpeg",
  "/green(12).jpeg",
  "/green(13).jpeg",
  "/green(14).jpeg",
  "/green(15).jpeg",
  "/green(16).jpeg",
  "/green(17).jpeg",
  "/green(18).jpeg",
  "/green(19).jpeg",
  "/green(20).jpeg",
];

const Work = () => {
  const naveigate = useNavigate();
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <section
      id="work"
      className="section-padding bg-secondary/30 dark:bg-secondary/5">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="title-section mx-auto">
            صور من أعمالنا
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            نماذج من الأعمال التي قمنا بتنفيذها في مختلف المجالات
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center mx-auto w-full px-4 sm:px-6 lg:px-8">
          <Carousel
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl"
            dir="ltr"
            defaultValue={0}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            plugins={[plugin.current]}>
            <CarouselContent>
              {workImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-2 sm:p-4">
                    <Card className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px]">
                      <CardContent className="flex items-center justify-center h-full w-full">
                        <img
                          src={image}
                          alt={`Image ${index + 1}`}
                          className="h-full w-full object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className=" hidden md:visible lg:visible  " />
            <CarouselNext className=" hidden md:visible lg:visible " />
          </Carousel>
        </motion.div>
        <div className="flex justify-center mt-4">
          <Button
            onClick={() => naveigate("/our-work")}
            className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm text-white cursor-pointer">
            عرض المزيد من أعمالنا
            <ImageIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Work;
