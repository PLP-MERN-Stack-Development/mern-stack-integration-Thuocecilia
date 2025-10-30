// src/pages/CategoryList.jsx
import { useEffect, useState } from "react";
import axios from "axios";

const SIDEBAR_WIDTH = 220; // adjust to your sidebar width
const CARD_WIDTH = 180;    // category card width
const GAP = 12;

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/categories");
        setCategories(res.data || []);
        setFilteredCategories(res.data || []);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const term = search.toLowerCase();
    const filtered = categories.filter(
      (cat) => cat.name.toLowerCase().includes(term) || cat._id.includes(term)
    );
    setFilteredCategories(filtered);
  }, [search, categories]);

  if (loading) return <p className="text-center mt-10">Loading categories...</p>;

  return (
    <div
      className="min-h-screen bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 p-6"
      style={{ paddingLeft: SIDEBAR_WIDTH + 16 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-center">All Categories</h2>

      {/* Search bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by name or ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Category grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(3, ${CARD_WIDTH}px)`,
          gap: `${GAP}px`,
          justifyContent: "start",
          maxWidth: `${CARD_WIDTH * 3 + GAP * 2}px`,
        }}
      >
        {filteredCategories.length > 0 ? (
          filteredCategories.map((cat) => (
            <div
              key={cat._id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex items-center justify-center font-semibold text-gray-700 cursor-pointer"
              style={{ width: CARD_WIDTH, height: 60 }}
              // onClick={() => handleCategoryClick(cat._id)} // optional future filtering
            >
              {cat.name}
            </div>
          ))
        ) : (
          <p className="text-center col-span-3">No categories match your search.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryList;
