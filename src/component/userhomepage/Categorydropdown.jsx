// 1. Import necessary modules
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../userhomepage/css/dropdown.css";
import { Link } from 'react-router-dom';
// 2. Define your component
const CategoryDropdown = () => {
  // State to hold categories
  const [categories, setCategories] = useState([]);
  // State to hold selected category
  const [selectedCategory, setSelectedCategory] = useState('');

  // Function to fetch categories from the server
  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/categories/');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  // Fetch categories on component mount
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      {/* Dropdown menu */}
      <select
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
    style={{ color: '#7CB9E8' }}
>

       <option class="drop" value="">BrowseCategory</option>

        {/* Map through categories to populate options */}
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            <Link to="/shop">{category.categoryName}</Link>
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryDropdown;
