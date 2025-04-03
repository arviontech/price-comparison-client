// components/filters/CategoryFilter.tsx

import { Checkbox } from "@/components/ui/checkbox";

const categories = [
  { name: "Free Delivery", count: 2550 },
  { name: "Top Selling", count: 46 },
  { name: "Personal care", count: 3300 },
  { name: "Skin", count: 6176 },
  { name: "Makeup", count: 6084 },
  { name: "Natural", count: 5623 },
  { name: "Men", count: 4770 },
  { name: "Offers", count: 1784 },
  { name: "Fragrance", count: 1158 },
  { name: "Mom & Baby", count: 876 },
  { name: "Hair styling", count: 593 },
];

export const CategoryFilter = () => {
  return (
    <div className="mb-8">
      <h3 className="font-medium mb-4">Product Categories</h3>
      <div className="space-y-3">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex items-center justify-between"
          >
            <div className="flex items-center space-x-2">
              <Checkbox id={category.name} />
              <label htmlFor={category.name} className="text-sm">
                {category.name}
              </label>
            </div>
            <span className="text-sm text-gray-500">{category.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
