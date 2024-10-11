import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import "./Home.css";
import CategoryView from "../../components/CategoryView";

export default function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <section
        style={{
          background: "#f5f5f5",
          color: "#000000"
        }}
      >
        <div className="content-1" style={{ padding: "15px" }}>
          <h3>KALIX luôn nỗ lực hết mình vì sự hài lòng của khách hàng!</h3>
          <p>
            "Sofa nói riêng và những món đồ nội thất luôn gắn liền với cuộc sống
            hằng ngày, vì lẽ đó KALIX mang hết tâm huyết lên từng sản phẩm để
            khách hàng có được trải nghiệm tốt nhất mỗi khi tận hưởng không gian
            sống bên gia đình của mình."
          </p>
        </div>
      </section>
      <section >
        <div>
          <h3>Danh mục nổi bật</h3>
          <p>
            Các sản phẩm sofa và nội thất của chúng tôi đều được thiết kế với sự
            tinh tế và độc đáo, mang lại không gian sống đẳng cấp cho bạn. Đồng
            thời, bộ sưu tập nội thất bao gồm các sản phẩm từ bàn cà phê, kệ
            tivi đến bàn trà, tất cả đều tạo nên sự hoàn hảo cho không gian sống
            của bạn.
          </p>
        </div>
      </section>

      <CategoryView />
    </div>
  );
}
