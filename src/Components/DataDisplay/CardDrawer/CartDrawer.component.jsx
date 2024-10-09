import { useState } from 'react';
import { Drawer } from 'antd';
import { style, bodyStyle } from './CartDrawer.style';

import ItemList from './ItemList/ItemList.component';
import PriceTable from '../PriceTable/PriceTable';
import useCalculateTax from '../../../Hooks/useCalculateTax';

const CartDrawer = ({
  onClickDrawer,
  drawerIsOpen,
  productOnCart,
  onRemoveProduct,
  onAddAmount,
  onRemoveAmount,
  onPlaceOrder,
}) => {
  const { subtotalPrice, totalPrice } = useCalculateTax(productOnCart,);

  return (
    <Drawer
      style={style}
      bodyStyle={bodyStyle}
      title="Current Order"
      placement="right"
      closeIcon={false}
      onClose={onClickDrawer}
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
