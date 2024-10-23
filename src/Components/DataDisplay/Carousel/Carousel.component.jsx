import styles from './Carousel.styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CarouselItem from './CarouselItem';

const Carousel = ({ searchKeyword, productData }) => {

  const filteredData = () => {
    return productData.filter(item => {
      return searchKeyword.toLowerCase() === '' ? item : item.name.toLowerCase().includes(searchKeyword.toLowerCase());
    });
  };

  return (
    <Slider {...styles} className="bg-white p-5 rounded-[14px]">
      {filteredData().map((product) => (
        <CarouselItem key={product.id} product={product} />
      ))}
    </Slider>
  );
};

export default Carousel;
