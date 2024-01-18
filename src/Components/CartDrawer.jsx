// Antd
import { DeleteOutlined, PlusCircleFilled, MinusCircleFilled } from "@ant-design/icons"
import { Drawer, Button } from "antd"
import { useState } from "react"


const CartDrawer = ({subtotalPrice, totalPrice, onClose, drawerIsOpen, productOnCart, handleRemoveProduct}) => {
  
  return (
    <Drawer 
    style={{
      backgroundColor: "#000",
      color: "#fff"
    }}
    title="Current Order" 
    placement="right" 
    closeIcon={false}
    onClose={onClose} 
    open={drawerIsOpen}
    className="font-gilroyMed"
    >
      <div className="w-[100%] h-[50%] mb-3 overflow-auto p-3 space-y-5 bg-[#121212] rounded-md">
        {productOnCart.length > 0 
        
        ? productOnCart.map( product => (
          <div key={product.id} className="px-3 py-2 space-y-3 bg-[#2d2d2d] rounded-md">
            <h1 className="font-gilroyBold text-[14px]">{product.name}</h1>
            <h1 className="font-gilroyBold text-[#909090]">${product.price}</h1>
            {/* <div className="flex space-x-5">
              <Button icon={<MinusCircleFilled />} />
              <h1 className="font-gilroyBold text-[#909090]">{product.amount}</h1>
              <Button icon={<PlusCircleFilled />} />
            </div> */}
            <Button icon={<DeleteOutlined/>} onClick={() => handleRemoveProduct(product.id)} />
          </div>
        ))

        : <h1>No Item in Cart</h1> }
      </div>
      <div className="w-[100%] px-3 py-2 bg-[#121212] rounded-md">
          <h1>Subtotal : {subtotalPrice > 0 ? `$${subtotalPrice}` : ''}</h1>
          <h1>Tax : 5%</h1>
          <h1>Total : {totalPrice > 0 ? `$${totalPrice}` : ''}</h1>
      </div>
    </Drawer>
  )
}

export default CartDrawer