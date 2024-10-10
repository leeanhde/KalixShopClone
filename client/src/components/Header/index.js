import React from 'react';
import styles from ''
const Header = () => {
  return (
    <header className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <a href="/">
          <img src="/path/to/logo.png" alt="KALIX" className="logo" />
        </a>
      </div>

      {/* Search Bar */}
      <div className="navbar-search">
        <input type="text" placeholder="Bạn đang tìm gì?" className="search-input" />
        <button className="search-btn">Tìm</button>
      </div>

      {/* Menu Items */}
      <nav className="navbar-menu">
        <ul>
          <li>
            Ghế sofa
            <ul className="dropdown">
              <li><a href="/sofa-da">Sofa da</a></li>
              <li><a href="/sofa-ni">Sofa nỉ</a></li>
              <li><a href="/sofa-goc">Sofa góc</a></li>
              <li><a href="/sofa-don">Sofa đơn</a></li>
              <li><a href="/sofa-vang">Sofa văng</a></li>
              <li><a href="/sofa-chung-cu">Sofa chung cư</a></li>
              <li><a href="/sofa-phong-ngu">Sofa phòng ngủ</a></li>
              <li><a href="/sofa-2-cho">Sofa 2 chỗ</a></li>
              <li><a href="/sofa-3-cho">Sofa 3 chỗ</a></li>
            </ul>
          </li>
          <li><a href="/noi-that-khac">Nội thất khác</a></li>
          <li><a href="/kien-thuc-noi-that">Kiến thức nội thất</a></li>
          <li><a href="/danh-gia">Đánh giá của khách hàng</a></li>
          <li><a href="/du-an">Dự án</a></li>
          <li><a href="/ve-chung-toi">Về chúng tôi</a></li>
        </ul>
      </nav>

      {/* Action Buttons */}
      <div className="navbar-actions">
        <a href="tel:0123456789" className="navbar-phone-icon">📞</a>
        <a href="/chat" className="navbar-chat-icon">💬</a>
        <a href="/zalo" className="navbar-zalo-icon">Zalo</a>
      </div>
    </header>
  );
};

export default Header;
