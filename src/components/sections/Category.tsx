
import React from "react";
import { useTranslation } from 'react-i18next';

type Categories = {
  name: string;
  en_name: string;
  id: string;
};
type CategoriesProps = {
  categories: Categories[];
  handleCategoryChange?: (categoryId: string, isChecked: boolean) => void;
  selectedCategories?: string[];
};

const Category: React.FC<CategoriesProps> = ({ categories ,handleCategoryChange ,selectedCategories }) => {
    const { i18n } = useTranslation();
    if (!categories || categories.length === 0) {
        return <div>No categories available</div>;
    }
  return (
    <div>
      <h5>{i18n.language === 'ar' ? 'التصنيفات' : 'Categories'}</h5>

      <ul>
        {categories.map((category, idx) => (
          <li  key={idx} className="flex items-center gap-2">
            <input
              type="checkbox"
              id={`category-${category.id}`}
              className="peer h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              name="category"
              value={category.id}
              checked={selectedCategories ? selectedCategories.includes(category.id) : false}
              onChange={(e) => {
                if (handleCategoryChange) {
                  handleCategoryChange(category.id, e.target.checked);
                }
              }}
            />
            <label
              htmlFor={`category-${category.id}`}
              className="cursor-pointer text-lg font-medium text-muted-foreground peer-checked:text-primary"

            >
              {i18n.language === 'ar' ? category.name : category.en_name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;