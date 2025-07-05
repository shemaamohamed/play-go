import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "all", name: "الكل" },
  { id: "gardens", name: "الحدائق" },
  { id: "irrigation", name: "أنظمة الري" },
  { id: "flowers", name: "تنسيق الزهور" },
];

const projectsData = [
  {
    id: 1,
    title: "تنسيق حديقة فيلا خاصة",
    category: "gardens",
    image:
      "https://images.pexels.com/photos/69776/tulips-bed-colorful-color-69776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    title: "تركيب نظام ري أوتوماتيكي",
    category: "irrigation",
    image:
      "https://images.pexels.com/photos/2749165/pexels-photo-2749165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    title: "تنسيق زهور لحفل زفاف",
    category: "flowers",
    image:
      "https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    title: "تصميم حديقة مجمع سكني",
    category: "gardens",
    image:
      "https://images.pexels.com/photos/580900/pexels-photo-580900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 5,
    title: "نظام ري بالتنقيط لمزرعة",
    category: "irrigation",
    image:
      "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 6,
    title: "تنسيق زهور لمناسبة شركة",
    category: "flowers",
    image:
      "https://images.pexels.com/photos/357567/pexels-photo-357567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(projectsData);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    if (categoryId === "all") {
      setVisibleProjects(projectsData);
    } else {
      setVisibleProjects(
        projectsData.filter((project) => project.category === categoryId)
      );
    }
  };

  return (
    <section
      id="projects"
      className="section-padding bg-white dark:bg-background"
    >
      <div className="container-custom">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="title-section mx-auto"
          >
            معرض أعمالنا
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground"
          >
            نماذج من الأعمال التي قمنا بتنفيذها في مختلف المجالات
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8 flex flex-wrap justify-center gap-4"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => handleCategoryChange(category.id)}
              className="min-w-24"
            >
              {category.name}
            </Button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {visibleProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="image-container h-72 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="image-overlay">
                    <span
                      onClick={() => (window.location.href = "#contact")}
                      className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-white"
                    >
                      تواصل معنا <ExternalLink className="h-4 w-4" />
                    </span>
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold">{project.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
             تواصل معنا
            
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
