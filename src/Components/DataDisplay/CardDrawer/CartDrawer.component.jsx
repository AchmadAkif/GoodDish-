import { Drawer } from 'antd';
import { style, bodyStyle } from './CartDrawer.style';

import ItemList from './ItemList/ItemList.component';
import PriceTable from './PriceTable/PriceTable';

const CartDrawer = ({
  subtotalPrice,
  totalPrice,
  onClose,
  drawerIsOpen,
  productOnCart,
  onRemoveProduct,
  onAddAmount,
  onRemoveAmount,
  onPlaceOrder,
}) => {
  return (
    <Drawer
      style={style}
      bodyStyle={bodyStyle}
      title="Current Order"
      placement="right"
      closeIcon={false}
      onClose={onClose}
      open={drawerIsOpen}
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
