// React
// import React, { Component } from "react";

// Antd
// import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Button } from "antd";

// React-Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({searchKeyword, productData, handleAddToCart}) => {
  
  const onAdd = (product) => {
    handleAddToCart(product)
  }

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };

  return (
    <Slider {...settings} className="bg-white p-5 rounded-[14px]">
      { productData.filter((item) => {
        return searchKeyword.toLowerCase() === ''
        ? item
        : item.name.toLowerCase().includes(searchKeyword)
      }).map( product => (
          <div key={product.id} className="!flex justify-between px-5 py-6 bg-[#eaeaea] rounded-md">
            <div className="space-y-3 ">
              <h1 className="font-gilroyBold">{product.name}</h1>
              <p className="font-gilroyMed">${product.price}</p>
              <Button className="bg-[#ffffff] border-0 font-gilroyMed" onClick={() => onAdd(product)}>Add to Cart</Button>
            </div>
            <div>
              <img src={product.img} alt="" className="h-[146px] w-[115px] rounded-md" />
            </div>
          </div>
        ))
      }
    </Slider>
  )
}

export default Carousel