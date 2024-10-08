import carouselStyle from '../Styles/carouselStyle';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ItemCard from './ItemCard';

const Carousel = ({ searchKeyword, productData, handleAddToCart }) => {
  const style = carouselStyle;
  const filteredData = () => {
    return productData.filter(item => {
      return searchKeyword.toLowerCase() === '' ? item : item.name.toLowerCase().includes(searchKeyword.toLowerCase());
    });
  };

  return (
    <Slider {...style} className="bg-white p-5 rounded-[14px]">
      {filteredData().map((product) => (
        <ItemCard product={product} handleAddToCart={handleAddToCart} />
      ))}
    </Slider>
  );
};

export default Carousel;
