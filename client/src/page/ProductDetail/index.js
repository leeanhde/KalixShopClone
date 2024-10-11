import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import "./ProductDetail.css";
import ReactPlayer from "react-player";
import CategoryView from "../../components/CategoryView";
export default function ProductDetail() {
  const { id } = useParams(); // Retrieve the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mainImage, setMainImage] = useState(null); // State for the main image
  const [selectedOption, setSelectedOption] = useState(null); // State for the selected option

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:9999/api/product/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);

        // Set the first image from the images array as the default main image
        if (data.images && data.images.length > 0) {
          setMainImage(data.images[0].url);
        } else {
          setMainImage(""); // Fallback if no images are available
        }

        // Set the first option as the default selected option
        if (data.options && data.options.length > 0) {
          setSelectedOption(data.options[0]);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <Header />
      <div className="product-detail-container">
        <div className="breadcrumb">
          <a href="/">Trang chủ</a> / <span>{product.name}</span>
        </div>
        <div className="product-content">
          <div className="product-image-section">
            <img
              src={mainImage}
              alt={product.name}
              className="product-main-image"
            />
            <div className="thumbnail-gallery">
              {product.images?.map((img, index) => (
                <img
                  key={index}
                  src={img.url}
                  alt={`Thumbnail ${index + 1}`}
                  className="thumbnail-image"
                  onClick={() => setMainImage(img.url)} // Set clicked thumbnail as main image
                />
              ))}
            </div>
          </div>
          <div className="product-info-section">
            <h2>{product.name}</h2>
            <h3 className="product-price">
              {selectedOption?.price
                ? `${selectedOption.price.toLocaleString("vi-VN")} ₫`
                : "N/A"}
            </h3>
            <span className="rating">⭐⭐⭐⭐⭐ ({product.rating || 0})</span>
            <div className="product-options">
              <h4>Chất liệu bọc</h4>
              <div className="material-options">
                {product.options?.map((option, index) => (
                  <button
                    key={index}
                    className={`material-button ${
                      selectedOption === option ? "active" : ""
                    }`}
                    onClick={() => handleOptionChange(option)}
                  >
                    {option.material}
                  </button>
                ))}
              </div>
              <div className="size-option">
                <h4>Size</h4>
                <button className="size-button">{product.size || "N/A"}</button>
              </div>
            </div>

            <button className="add-to-cart-button">Thêm vào giỏ hàng</button>
            <div className="add-to-card-class"></div>
            <div className="contact-info">
              <p>📞 0942.68.9393 - 0975.24.9393</p>
              <a href="https://facebook.com" className="contact-link">
                Chat Facebook để được tư vấn ngay
              </a>
              <a href="https://zalo.me" className="contact-link">
                Chat Zalo để được tư vấn ngay
              </a>
            </div>
          </div>
        </div>
        <div className="detail">
          <h4>Mô tả sản phẩm</h4>
          <p>{product.description}</p>
          <div className="player">
            <ReactPlayer url="https://www.youtube.com/watch?v=JObdGgXTHmU&t=3s" />
          </div>
        </div>
      </div>
      <CategoryView />
    </div>
  );
}
