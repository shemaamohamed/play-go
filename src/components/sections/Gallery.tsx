import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface GalleryImage {
  id: number;
  src: string;
}

const Gallery = () => {
  const { i18n } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);
  const [showAllImages, setShowAllImages] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  const MAX_TRANSLATE = 100; // Limit in pixels for how far the image can be dragged

  const galleryImages: GalleryImage[] = [
    { id: 1, src: "/1.png" },
    { id: 2, src: "/2.png" },
    { id: 3, src: "/3.png" },
    { id: 4, src: "/4.png" },
    { id: 5, src: "/5.png" },
    { id: 6, src: "/6.png" },
    { id: 7, src: "/7.png" },
    { id: 8, src: "/8.png" },
    { id: 9, src: "/9.png" },
    { id: 10, src: "/10.png" },
    { id: 11, src: "/11.png" },
    { id: 12, src: "/12.png" },
    { id: 13, src: "/13.png" },
    { id: 14, src: "/14.png" },
    { id: 15, src: "/15.png" },
    { id: 16, src: "/16.png" },
    { id: 17, src: "/17.png" },
    { id: 18, src: "/18.png" },
    { id: 19, src: "/19.png" },
    { id: 20, src: "/20.png" },
    { id: 21, src: "/21.png" },
    { id: 22, src: "/22.png" },
    { id: 23, src: "/23.png" },
    { id: 24, src: "/24.png" },
    { id: 25, src: "/25.png" },
    { id: 26, src: "/26.png" },
    { id: 27, src: "/27.png" },
    { id: 28, src: "/28.png" },
    { id: 29, src: "/29.png" },
    { id: 30, src: "/30.png" },
  ];

  // عرض 6 صور فقط في البداية
  const displayedImages = showAllImages ? galleryImages : galleryImages.slice(0, 6);

  const openDialog = (imageId: number) => {
    setSelectedImage(imageId);
    setIsDialogOpen(true);
    setIsZoomed(false);
    setImagePosition({ x: 0, y: 0 });
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedImage(null);
    setIsZoomed(false);
    setImagePosition({ x: 0, y: 0 });
    setIsDragging(false);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    setIsZoomed(false);
    setImagePosition({ x: 0, y: 0 });
    setIsDragging(false);

    const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage);
    const newIndex = direction === "prev"
      ? (currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1)
      : (currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0);

    setSelectedImage(galleryImages[newIndex].id);
  };

  const clamp = (value: number, min: number, max: number) => {
    return Math.min(Math.max(value, min), max);
  };

  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (hasDragged) {
      setHasDragged(false);
      return;
    }
    if (!isZoomed) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setZoomPosition({ x, y });
      setIsZoomed(true);
      setImagePosition({ x: 0, y: 0 });
    } else {
      setIsZoomed(false);
      setImagePosition({ x: 0, y: 0 });
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!isZoomed) return;
    setIsDragging(true);
    setHasDragged(false);
    setDragStart({ x: e.clientX - imagePosition.x, y: e.clientY - imagePosition.y });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!isZoomed || !isDragging) return;
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    setImagePosition({
      x: clamp(newX, -MAX_TRANSLATE, MAX_TRANSLATE),
      y: clamp(newY, -MAX_TRANSLATE, MAX_TRANSLATE),
    });
    setHasDragged(true);
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e: React.TouchEvent<HTMLImageElement>) => {
    if (!isZoomed || e.touches.length !== 1) return;
    const touch = e.touches[0];
    setIsDragging(true);
    setHasDragged(false);
    setDragStart({ x: touch.clientX - imagePosition.x, y: touch.clientY - imagePosition.y });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLImageElement>) => {
    if (!isZoomed || !isDragging || e.touches.length !== 1) return;
    const touch = e.touches[0];
    const newX = touch.clientX - dragStart.x;
    const newY = touch.clientY - dragStart.y;
    setImagePosition({
      x: clamp(newX, -MAX_TRANSLATE, MAX_TRANSLATE),
      y: clamp(newY, -MAX_TRANSLATE, MAX_TRANSLATE),
    });
    setHasDragged(true);
  };

  const handleTouchEnd = () => setIsDragging(false);

  const currentImage = galleryImages.find((img) => img.id === selectedImage);

  return (
    <section
      id="gallery"
      className="section-padding  relative overflow-hidden"
    >
      {/* Decorative shapes for Gallery section */}
      <img
        src='/shape10-1.png'
        alt="شكل"
        className="hidden md:block absolute top-12 right-12 w-14 h-14 opacity-25 animate-gentle-spin z-10"
      />
      <img
        src='/shape8.png'
        alt="شكل"
        className="hidden md:block absolute top-24 left-24 w-10 h-10  animate-float z-10"
      />
      <img
        src='/shape10.png'
        alt="شكل"
        className="hidden md:block absolute bottom-16 right-16 w-12 h-12  animate-wiggle z-10"
      />
      <img
        src='/shape8.png'
        alt="شكل"
        className="hidden md:block absolute bottom-32 left-12 w-8 h-8  animate-drift z-10"
      />
      <img
        src='/shape9.png'
        alt="شكل"
        className="hidden md:block absolute top-10 right-1/4 w-16 h-16  animate-bounce z-10"
      />
      <img
        src='/shape11.png'
        alt="شكل"
        className="hidden md:block absolute top-20 left-1/3 w-10 h-10  animate-scale-pulse z-10"
      />
     
      <img
        src='/shape10-1.png'
        alt="شكل"
        className="hidden md:block absolute top-1/2 right-1/6 w-11 h-11  animate-spin z-10"
      />

      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="title-section mx-auto text-center text-primary"
        >
          {i18n.language === "ar" ? "معرض صور الحضانة" : "Nursery Gallery"}
        </motion.h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6 lg:px-3">
          {displayedImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square cursor-zoom-in overflow-hidden rounded-lg bg-gray-200 shadow-md transition-all duration-300 hover:shadow-xl"
              onClick={() => openDialog(image.id)}
            >
              <img
                src={image.src}
                alt={`Gallery image ${image.id}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {!showAllImages && galleryImages.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center mt-8"
          >
            <button
              onClick={() => setShowAllImages(true)}
              className="btn-primary px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              {i18n.language === "ar" ? "مشاهدة جميع الصور" : "View All Images"}
              <span className="mr-2 text-sm opacity-75">
                ({galleryImages.length - 6} {i18n.language === "ar" ? "صورة إضافية" : "more"})
              </span>
            </button>
          </motion.div>
        )}

        {showAllImages && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mt-8"
          >
            <button
              onClick={() => setShowAllImages(false)}
              className="btn-primary px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              {i18n.language === "ar" ? "إخفاء الصور الإضافية" : "Show Less"}
            </button>
          </motion.div>
        )}

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="m-auto fixed inset-0 z-50 h-[300px] lg:h-[500px] p-0 bg-black/90 border-none shadow-none flex items-center justify-center">
            <DialogHeader className="sr-only">
              <DialogTitle>{currentImage?.src}</DialogTitle>
            </DialogHeader>

            {currentImage && (
              <div className="relative w-full h-full flex items-center justify-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-30 h-10 w-10 rounded-full bg-black/70 text-white hover:bg-black/90 border border-white/20"
                  onClick={closeDialog}
                >
                  <X className="h-5 w-5" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-16 z-30 h-10 w-10 rounded-full bg-black/70 text-white hover:bg-black/90 border border-white/20"
                  onClick={() => setIsZoomed(!isZoomed)}
                >
                  {isZoomed ? <ZoomOut className="h-5 w-5" /> : <ZoomIn className="h-5 w-5" />}
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 z-30 h-12 w-12 -translate-y-1/2 rounded-full bg-black/70 text-white hover:bg-black/90 border border-white/20"
                  onClick={() => navigateImage("prev")}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 z-30 h-12 w-12 -translate-y-1/2 rounded-full bg-black/70 text-white hover:bg-black/90 border border-white/20"
                  onClick={() => navigateImage("next")}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>

                <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center overflow-hidden">
                  <img
                    ref={imageRef}
                    src={currentImage.src}
                    alt={`Image ${currentImage.id}`}
                    className={`max-w-full max-h-full object-contain rounded-lg shadow-2xl select-none ${
                      isZoomed ? (isDragging ? "cursor-grabbing" : "cursor-grab") : "cursor-zoom-in"
                    }`}
                    style={{
                      transformOrigin: isZoomed ? `${zoomPosition.x}% ${zoomPosition.y}%` : "center",
                      transform: `scale(${isZoomed ? 2 : 1}) translate(${imagePosition.x}px, ${imagePosition.y}px)`,
                      transition: isZoomed ? "none" : "transform 0.3s ease",
                      touchAction: "none",
                    }}
                    onClick={handleImageClick}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    draggable={false}
                  />

                  {!isZoomed && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-4 py-2 text-sm text-white border border-white/20">
                      Click to zoom
                    </div>
                  )}
                </div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-4 py-2 text-sm text-white border border-white/20">
                  {galleryImages.findIndex((img) => img.id === selectedImage) + 1} / {galleryImages.length}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
      <div>
        
      </div>
      

    </section>
  );
};

export default Gallery;