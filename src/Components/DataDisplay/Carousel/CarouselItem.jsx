import { Button } from "antd";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../Pages/POS/slice";

const CarouselItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="!flex justify-between px-5 py-6 bg-[#eaeaea] rounded-md"
    >
      <div className="space-y-3 mr-5">
        <h1 className="font-gilroyBold">{product.name}</h1>
        <p className="font-gilroyMed">${product.price}</p>
        <Button
          name={'Add to Cart'}
          className="bg-[#ffffff] border-0 font-gilroyMed"
          onClick={() => dispatch(addProduct(product))}
        >
          Add to Cart
        </Button>
      </div>
      <img
        src={product.img}
        className="h-[146px] w-[115px] rounded-md"
      />
    </div>
  );
};

export default CarouselItem;