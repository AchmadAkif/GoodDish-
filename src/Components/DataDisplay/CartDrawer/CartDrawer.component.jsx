import { Drawer } from 'antd';
import { style, bodyStyle } from './CartDrawer.style';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDrawer } from './slice';

import ItemList from './ItemList/ItemList.component';
import PriceTable from '../PriceTable/PriceTable';
import useCalculateTax from '../../../Hooks/useCalculateTax';

const CartDrawer = ({
  onClickDrawer,
  productOnCart,
  onRemoveProduct,
  onAddAmount,
  onRemoveAmount,
  onPlaceOrder,
}) => {
  const drawerStatus = useSelector(state => state.drawer.isOpen);
  const dispatch = useDispatch();

  const { subtotalPrice, totalPrice } = useCalculateTax(productOnCart,);

  return (
    <Drawer
      style={style}
      bodyStyle={bodyStyle}
      title="Current Order"
      placement="right"
      closeIcon={false}
      onClose={() => dispatch(toggleDrawer())}
      open={drawerStatus}
      className="font-gilroyMed"
    >
      <ItemList
        productOnCart={productOnCart}
        onRemoveProduct={onRemoveProduct}
        onAddAmount={onAddAmount}
        onRemoveAmount={onRemoveAmount}
      />
      {productOnCart.length > 0 ? (
        <PriceTable
          subtotalPrice={subtotalPrice}
          totalPrice={totalPrice}
          onPlaceOrder={onPlaceOrder}
        />
      ) : null}
    </Drawer>
  );
};

export default CartDrawer;
