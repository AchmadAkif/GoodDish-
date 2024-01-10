// React
// import React, { Component } from "react";

// Antd
// import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { ConfigProvider, Button } from "antd";

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
    slidesToShow: 3,
    swipeToSlide: true,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#000",
          colorBgContainer: "#fff"
        },
      }}
    >
      <Slider {...settings} className="bg-white p-5 rounded-[14px]">
        {productData.map( product => (
          <div key={product.id} className="flex flex-col space-y-3 px-5 py-6 bg-[#eaeaea] rounded-md">
            <h1 className="font-gilroyBold">{product.name}</h1>
            <p className="font-gilroyMed">${product.price}</p>
            <div className="flex">
              {/* <Button icon={<MinusOutlined />} className="bg-white" onClick={handleReduceAmount} />
              <input min={0} defaultValue={0} type="number" className="max-w-[35px] text-center outline-none font-gilroyMed bg-[#eaeaea]" />
              <Button icon={<PlusOutlined />} className="bg-white" onClick={handleAddAmount} /> */}
              <Button onClick={() => onAdd(product)}>Add to Cart</Button>
            </div>
          </div>
        ))}
      </Slider>
    </ConfigProvider>

  )
}

export default Carousel