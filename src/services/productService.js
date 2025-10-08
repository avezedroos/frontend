// src/services/productService.js
import axios from "axios";
const baseUrl = "https://template-marketplace-backend.onrender.com/";
console.log("API Base URL:", baseUrl);
const API_BASE_URL = `${baseUrl}/api/products`; // replace with your API endpoint

/**
 * Fetch products from server with pagination
 * @param {number} page - current page number
 * @param {number} limit - number of products per request
 * @returns {Promise<Array>} - returns a promise resolving to product array
 */
export const fetchProducts = async (page = 1, limit = 10) => {
  try {
    const response = await axios.get(`${API_BASE_URL}?page=${page}&limit=${limit}`);
    return response.data; // assuming your API returns array of products
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
