import { useToast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, MoveLeft } from "lucide-react";
import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Dialog, DialogContent } from "../ui/dialog";

interface Image {
  imageUrl: string;
  publicId: string;
}

const OurWork = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { toast } = useToast();
  const [token] = useLocalStorage("token", "");

  const {
    isPending,
    error,
    data: images,
  } = useQuery<Image[]>({
    queryKey: ["images"],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/images`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        toast({
          title: "خطأ",
          description: "حدث خطأ أثناء جلب الصور",
          variant: "destructive",
        });
        throw new Error("Failed to fetch images");
      }
      return response.json();
    },
  });

  if (isPending) {
    return (
      <section className="section-padding bg-white dark:bg-background">
        <div className="container-custom">
          <div className="flex items-center justify-center h-96">
            <p className="text-muted-foreground animate-bounce  transition-all duration-500">
              جاري تحميل الصور...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section-padding bg-white dark:bg-background">
        <div className="container-custom">
          <div className="flex items-center justify-center h-96">
            <p className="text-destructive text-2xl md:text-3xl lg:text-4xl">
              حدث خطأ أثناء تحميل الصور
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="section-padding bg-white dark:bg-background">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="title-section mx-auto">
            معرض صور من أعمالنا
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

        <AnimatePresence mode="wait">
          <motion.div
            key={images?.length}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {images?.length > 0 ? (
              images.map((image, index) => (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="group cursor-pointer">
                  <Card className="image-container p-2 h-56 overflow-hidden rounded-lg">
                    <img
                      src={image.imageUrl}
                      alt={image.publicId}
                      className="h-full w-full object-cover rounded-lg transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="image-overlay">
                      <span
                        onClick={() => setSelectedIndex(index)}
                        className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-white">
                        فتح
                        <ExternalLink className="h-4 w-4" />
                      </span>
                    </div>
                  </Card>
                </motion.div>
              ))
            ) : (
              <div className="col-span-3 lg:col-span-4">
                <Card className="h-56 flex items-center justify-center">
                  <p className="text-muted-foreground">
                    لا توجد صور متاحة حاليا
                  </p>
                </Card>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {selectedIndex !== null && images && (
          <ImageModal
            imageUrl={images[selectedIndex].imageUrl}
            onClose={() => setSelectedIndex(null)}
            handleNext={(e) => {
              e.stopPropagation();
              setSelectedIndex((prev) =>
                prev !== null ? (prev + 1) % images.length : 0
              );
            }}
            handlePrev={(e) => {
              e.stopPropagation();
              setSelectedIndex((prev) =>
                prev !== null ? (prev === 0 ? images.length - 1 : prev - 1) : 0
              );
            }}
          />
        )}
      </div>
    </section>
  );
};

export default OurWork;

const ImageModal = ({
  imageUrl,
  onClose,
  handleNext,
  handlePrev,
}: {
  imageUrl: string;
  onClose: () => void;
  handleNext: (e: React.MouseEvent) => void;
  handlePrev: (e: React.MouseEvent) => void;
}) => {
  return (
    <Dialog
      open={true}
      onOpenChange={onClose}>
      <DialogContent className=" m-auto fixed inset-0 z-50 flex items-center justify-center h-[300px]">
        <Button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 
          rounded-full p-2"
          variant="outline"
          onClick={handlePrev}>
          <MoveLeft className="h-6 w-6" />
        </Button>

        <Button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 
          rounded-full p-2"
          variant="outline"
          onClick={handleNext}>
          <MoveLeft className="h-6 w-6 rotate-180" />
        </Button>

        <img
          src={imageUrl}
          alt="عرض الصورة"
          className="w-[100%]  mx-auto h-[300px]  object-contain "
          loading="lazy"
        />
      </DialogContent>
    </Dialog>
  );
};
