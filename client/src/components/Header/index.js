import React from "react";

import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <section className="Hearder">
        <div className="search-bar">
          <span className="logo">
            <Link to="/">
              <img
                src="//kalix.vn/cdn/shop/files/logo-kalix-430x_288x.png?v=1718447251"
                alt="Logo"
              />
            </Link>
          </span>
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </div>

        <div className="menu">
          <nav>
            <ul>
              <li className="dropdown">
                <a href="#">Ghe sofa</a>
                <ul className="dropdown-content">
                  <li>
                    <a href="#">Sofa vang</a>
                  </li>
                  <li>
                    <a href="#">Sofa goc</a>
                  </li>
                  <li>
                    <a href="#">Sofa giuong</a>
                  </li>
                  <li>
                    <a href="#">Sofa da</a>
                  </li>
                  <li>
                    <a href="#">Sofa vai</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#">Noi that khac</a>
                <ul className="dropdown-content">
                  <li>
                    <a href="#">Ban tra va ke tivi</a>
                  </li>
                  <li>
                    <a href="#">Ban ghe an</a>
                  </li>
                  <li>
                    <a href="#">Giuong boc</a>
                  </li>
                  <li>
                    <a href="#">Tham trai san</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#">Kien thuc ve noi that</a>
                <ul className="dropdown-content">
                  <li>
                    <a href="#">Sofa vang</a>
                  </li>
                  <li>
                    <a href="#">Sofa goc</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Danh gia cua khach hang</a>
              </li>
              <li>
                <a href="#">Du an</a>
              </li>
              <li>
                <a href="#">Ve chung toi</a>
              </li>
            </ul>
          </nav>
        </div>
    </section>
  );
}
