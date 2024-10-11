import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Category.css";

export default function Category() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredProductId, setHoveredProductId] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:9999/api/category");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCategories(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleMouseEnter = (productId) => {
    setHoveredProductId(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };

  return (
    <div className="category-container">
      {loading ? (
        <p>Loading categories...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="category-list">
          {categories.map((category) => (
            <div key={category._id} className="category-card">
              <div className="cate-name">
                <h3>{category.name}</h3>
                <Link to={"#"} className="list-product-by-id">
                  <p>Xem tat ca</p>
                </Link>
              </div>

              <div className="product-list">
                {category.products.slice(0, 6).map((product) => (
                  <div
                    key={product._id}
                    className="product-card"
                    onMouseEnter={() => handleMouseEnter(product._id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link to={`/product/${product._id}`}>
                      <img
                        src={
                          hoveredProductId === product._id &&
                          product.images?.[1]?.url
                            ? product.images[1].url
                            : product.images?.[0]?.url || "default-image-url.jpg"
                        }
                        alt={product.name}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Link>
                    <Link to={`/product/${product._id}`} className="product-name">
                      <h4>{product.name}</h4>
                    </Link>
                    <div className="rating">
                      <span>⭐⭐⭐⭐⭐ ({product.rating || 0})</span>
                    </div>
                    <p>
                      Price:{" "}
                      {product.options?.[0]?.price
                        ? `${product.options[0].price.toLocaleString("vi-VN")} VND`
                        : "N/A"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
