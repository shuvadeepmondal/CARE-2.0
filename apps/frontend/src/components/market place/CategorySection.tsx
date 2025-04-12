import React from "react";

interface Item {
  image: string;
  title: string;
  price: string;
  discount?: string; // Make discount optional
  rating: string;
}

interface CategorySectionProps {
  title: string;
  items: Item[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, items = [] }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
            {/* Image with lazy loading */}
            <div className="h-40 bg-gray-100 flex items-center justify-center mb-4">
              <img src={item.image} alt={item.title} loading="lazy" className="max-h-full max-w-full object-contain" />
            </div>

            {/* Item details */}
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 mb-1">{item.price}</p>

            {/* Show discount if available */}
            {item.discount && (
              <p className="text-sm bg-green-100 text-green-600 font-semibold px-2 py-1 rounded-full inline-block">
                {item.discount} Off
              </p>
            )}

            {/* Rating */}
            <p className="text-sm text-yellow-500">{item.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
