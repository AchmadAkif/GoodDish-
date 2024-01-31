// React
// import React, { Component } from "react";

// Antd
// import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Button } from "antd";

// React-Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({productData, handleAddToCart}) => {
  
  const onAdd = (product) => {
    handleAddToCart(product)
  }

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
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
        <div key={product.id} className="!flex justify-between px-5 py-6 bg-[#eaeaea] rounded-md">
          <div className="space-y-3 ">
            <h1 className="font-gilroyBold">{product.name}</h1>
            <p className="font-gilroyMed">${product.price}</p>
            <Button className="bg-[#ffffff] border-0 font-gilroyMed" onClick={() => onAdd(product)}>Add to Cart</Button>
          </div>
          <div>
            <img src={product.img} alt="" className="max-h-[146px] w-[115px] rounded-md" />
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default Carousel