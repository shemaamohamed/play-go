import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'محمد العبدالله',
    role: 'صاحب فيلا خاصة',
    content: 'تجربتي مع شركة المحترفون الزراعية كانت ممتازة. قاموا بتصميم وتنفيذ حديقة منزلي باحترافية عالية وأسعار منافسة. أنصح بالتعامل معهم.',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    name: 'سارة الأحمد',
    role: 'مديرة مجمع سكني',
    content: 'قامت الشركة بتنفيذ مشروع تنسيق حدائق المجمع السكني بشكل رائع. المهندسين والفنيين على درجة عالية من الكفاءة والالتزام بالمواعيد.',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: 3,
    name: 'خالد الناصر',
    role: 'مدير فندق',
    content: 'تعاملنا مع المحترفون الزراعية في تنسيق الزهور للمناسبات في الفندق. كانت النتائج مبهرة والتزامهم بالمواعيد وجودة الخدمة ممتازة.',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, nextSlide]);

  return (
    <section className="section-padding relative overflow-hidden bg-white dark:bg-background">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="title-section mx-auto"
          >
            آراء العملاء
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground"
          >
            نفتخر بثقة عملائنا وشهاداتهم على جودة خدماتنا
          </motion.p>
        </div>

        <div
          className="relative rounded-2xl bg-secondary/30 p-8 dark:bg-secondary/10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute right-8 top-8 text-primary opacity-20">
            <Quote className="h-16 w-16" />
          </div>

          <div className="relative mx-auto max-w-4xl overflow-hidden py-8">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-full px-4 text-center"
                >
                  <div className="mb-6 flex justify-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-20 w-20 rounded-full border-4 border-primary object-cover"
                    />
                  </div>
                  <blockquote className="mb-6 text-xl font-medium leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="text-primary">
                    <p className="text-lg font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
              aria-label="السابق"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-6' : 'bg-primary/30'
                  }`}
                  aria-label={`الانتقال إلى الشهادة ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
              aria-label="التالي"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;