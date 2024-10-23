import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import ItemCard from '../ItemCard/ItemCard.component';


const ItemList = ({ onRemoveProduct, onAddAmount, onRemoveAmount }) => {
  const productOnCart = useSelector(state => state.cart.productOnCart);

  return (
    <div className="w-[100%] h-[50%] mb-[10px] overflow-auto px-5 py-5 space-y-5 bg-[#121212] rounded-md">
      {productOnCart.length > 0
        ? (
          productOnCart.map((product) => (
            <ItemCard
              key={uuidv4()}
              product={product}
              onRemoveProduct={onRemoveProduct}
              onAddAmount={onAddAmount}
              onRemoveAmount={onRemoveAmount}
            />
          ))
        )
        : (<h1 className="text-[18px]">No Item in Cart</h1>)
      }
    </div>
  );
};

export default ItemList;