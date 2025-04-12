import { useState } from 'react';
import CategorySection from '../market place/CategorySection';
import brokenLaptop from '../../assets/book feed.png';
import nonWorkingTV from '../../assets/book feed.png';
import oldSmartphone from '../../assets/book feed.png';
import damagedPrinter from '../../assets/book feed.png';
import faultyRouter from '../../assets/book feed.png';
import wornOutBattery from '../../assets/book feed.png';

// Sample data for categories and items
const categories = [
  {
    title: "Electronics for Recycling",
    items: [
      { title: "Broken Laptop", image: brokenLaptop, price: "₹ 2000", condition: "Non-working", rating: "⭐⭐⭐" },
      { title: "Non-working TV", image: nonWorkingTV, price: "₹ 1500", condition: "Screen Issue", rating: "⭐⭐⭐⭐" },
      { title: "Old Smartphone", image: oldSmartphone, price: "₹ 1000", condition: "Battery Issue", rating: "⭐⭐⭐⭐" },
      { title: "Old Camera", image: oldSmartphone, price: "₹ 3000", condition: "Non-working", rating: "⭐⭐⭐⭐" },
      { title: "Damaged Drone", image: oldSmartphone, price: "₹ 5000", condition: "Sensor Failure", rating: "⭐⭐⭐⭐" },
      { title: "Broken Tablet", image: oldSmartphone, price: "₹ 1000", condition: "Battery Issue", rating: "⭐⭐⭐⭐" },
    ],
  },
  {
    title: "Office Equipment",
    items: [
      { title: "Damaged Printer", image: damagedPrinter, price: "₹ 800", condition: "Paper Jam", rating: "⭐⭐⭐" },
      { title: "Faulty Router", image: faultyRouter, price: "₹ 500", condition: "Connection Issue", rating: "⭐⭐⭐⭐" },
    ],
  },
  {
    title: "Power & Accessories",
    items: [
      { title: "Worn-out Battery", image: wornOutBattery, price: "₹ 300", condition: "Doesn't Hold Charge", rating: "⭐⭐⭐" },
    ],
  },
];

function Category() {
  const [searchQuery, setSearchQuery] = useState('');

  // 🔍 Real-time Search: Filter categories based on search query
  const filteredCategories = categories
    .map(category => ({
      ...category,
      items: category.items.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter(category => category.items.length > 0); // Remove empty categories

  return (
    <>
      {/* Adjusted margin and padding to ensure visibility of heading */}
      <div className="text-center mb-8 mt-24 z-10"> 
        <h1 className="text-5xl text-slate-800 font-bold mb-2">
          Market<span className="text-blue-500">Place</span>
        </h1>
        <p className="mx-auto max-w-[700px] text-slate-400 md:text-xl lg:text-base xl:text-xl dark:text-white">
          Turning Trash into Treasure: Your e-Waste, Our Marketplace!
        </p>
      </div>

      {/* Search and Filter UI */}
      <div className="search-filter-bar mb-10 flex space-x-4 p-5 z-10">
        <input
          type="text"
          placeholder="Search items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar flex-grow p-2 border border-gray-300 rounded-2xl"
        />
      </div>

      {/* Display Filtered Categories */}
      <div className="container mx-auto p-6 z-10">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category, index) => (
            <CategorySection key={index} title={category.title} items={category.items} />
          ))
        ) : (
          <p className="text-center text-gray-500">No items found</p>
        )}
      </div>
    </>
  );
}

export default Category;
