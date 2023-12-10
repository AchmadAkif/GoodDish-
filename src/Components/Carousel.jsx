// React
import React, { Component } from "react";

// Antd
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Button } from "antd";

// React-Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = (props) => {
  const productData = props.productData

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };

  return (
    <Slider {...settings} className="bg-white p-5 rounded-[14px]">
      {productData.map( product => (
        <div key={product.id} className="px-5 py-6 bg-[#eaeaea] rounded-md">
          <h1 className="font-gilroyBold">{product.name}</h1>
          <p className="font-gilroyMed">${product.price}</p>
          <div className="flex">
            <Button icon={<MinusOutlined />} />
            <input min={0} type="number" className="max-w-[50px] outline-none font-gilroyMed bg-[#eaeaea]" />
            <Button icon={<PlusOutlined />} />
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default Carousel