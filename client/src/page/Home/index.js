import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import "./Home.css";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const slides = [
    {
      src: "//kalix.vn/cdn/shop/files/sofa-rosy-kalix-1200-2_180x.png?v=1721295836 180w 183h",
    },
    {
      src: "//kalix.vn/cdn/shop/files/sofa-prime-1200-kalix_180x.png?v=1721295632 180w 183h",
    },
    {
      src: "//kalix.vn/cdn/shop/files/da-rio-banner-kalix_180x.jpg?v=1721355436 180w 101h",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % slides.length) + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    // Fetch products from API
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost:9999/api/category/6707796f73a741cfd84fe994/products"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const plusSlides = (n) => {
    setCurrentSlide((prevSlide) => {
      let newSlide = prevSlide + n;
      if (newSlide > slides.length) {
        newSlide = 1;
      } else if (newSlide < 1) {
        newSlide = slides.length;
      }
      return newSlide;
    });
  };

  const goToSlide = (n) => {
    setCurrentSlide(n);
  };

  return (
    <div>
      <Header />
      <div>
        <div className="slideshow-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`mySlides fade ${
                currentSlide === index + 1 ? "active" : ""
              }`}
              style={{ display: currentSlide === index + 1 ? "flex" : "none", justifyContent:"center"}}
            >
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                style={{ width: "60%", height: "500px" }}
              />
            </div>
          ))}
        </div>
        <br />
      </div>
      <div>
        <h3>KALIX luôn nỗ lực hết mình vì sự hài lòng của khách hàng!</h3>
        <p>
          "Sofa nói riêng và những món đồ nội thất luôn gắn liền với cuộc sống
          hằng ngày, vì lẽ đó KALIX mang hết tâm huyết lên từng sản phẩm để
          khách hàng có được trải nghiệm tốt nhất mỗi khi tận hưởng không gian
          sống bên gia đình của mình."
        </p>
      </div>
      <div>
        <h3>Danh mục nổi bật</h3>
        <p>
          Các sản phẩm sofa và nội thất của chúng tôi đều được thiết kế với sự
          tinh tế và độc đáo, mang lại không gian sống đẳng cấp cho bạn. Đồng
          thời, bộ sưu tập nội thất bao gồm các sản phẩm từ bàn cà phê, kệ tivi
          đến bàn trà, tất cả đều tạo nên sự hoàn hảo cho không gian sống của
          bạn.
        </p>
        <div></div>
      </div>

      <section>
        <div className="section-heading">
          <div className="category-view">
            <h3>Top sản phẩm bán chạy nhất</h3>
            <Link to="#" className="view-all">xem tất cả</Link>
          </div>
        </div>
        {loading ? (
          <p>Loading products...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div className="product-list">
            {products.map((product, index) => (
              <div key={index} className="product-card">
                <Link to={`/product/${product._id}`}>
                  <img
                    src={product.images?.[0]?.url || 'default-image-url.jpg'} 
                    alt={product.name}
                    style={{ width: "400px", height: "400px" }}
                  />
                </Link>
                <Link to={`/product/${product._id}`} className="product-name">
                  <h4>{product.name}</h4>
                </Link>
                <p>Price: {product.options?.[0]?.price || 'N/A'} VND</p> 
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
