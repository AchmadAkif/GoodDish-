// Antd
import { DeleteOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons"
import { Drawer, Button, InputNumber, Divider } from "antd"

// UUID
import { v4 as uuidv4 } from 'uuid';

const CartDrawer = ({
  subtotalPrice, 
  totalPrice, 
  onClose, 
  drawerIsOpen, 
  productOnCart, 
  onRemoveProduct, 
  onAddAmount, 
  onRemoveAmount, 
  onChangeAmount,
  onStoreAmountValue,
  amount,
  setAmount

}) => {
  
  return (
    <Drawer 
    style={{
      backgroundColor: "#000",
      color: "#fff",
    }}
    bodyStyle={{
      paddingLeft: 10,
      paddingRight: 10,
    }}
    title="Current Order" 
    placement="right" 
    closeIcon={false}
    onClose={onClose} 
    open={drawerIsOpen}
    className="font-gilroyMed"
    >
      <div className="w-[100%] h-[50%] mb-[10px] overflow-auto px-5 py-5 space-y-5 bg-[#121212] rounded-md">
        {productOnCart.length > 0 
        
        ? productOnCart.map( product => (
          <div key={uuidv4()} className="flex justify-between items-end px-4 py-3 space-y-3 bg-[#1F1F1F] rounded-md">
            <div className="space-y-2">
              <h1 className="font-gilroyBold text-[18px]">{product.name}</h1>
              <h1 className="font-gilroyBold text-[#909090] text-[16px]">${product.price}</h1>
              {/* <div className="flex space-x-5">
                <Button icon={<MinusCircleFilled />} />
                <h1 className="font-gilroyBold text-[#909090]">{product.amount}</h1>
                <Button icon={<PlusCircleFilled />} />
              </div> */}
              <div className="space-x-2">
                <Button className="bg-[#2d2d2d] border-0 shadow-none" type={"primary"} icon={<MinusOutlined />} onClick={() => onRemoveAmount(product.id)} />
                <InputNumber defaultValue={product.amount} /*onChange={onChangeAmount}*/ /*onBlur={() => onStoreAmountValue(product.id)}*//>
                <Button className="bg-[#2d2d2d] border-0 shadow-none" type={"primary"} icon={<PlusOutlined/>} onClick={() => onAddAmount(product.id)} />
              </div>
            </div>
            <Button className="bg-[#2d2d2d] border-0 shadow-none" type={"primary"} icon={<DeleteOutlined/>} onClick={() => onRemoveProduct(product.id)} />
          </div>
        ))

        : <h1 className="text-[18px]">No Item in Cart</h1> }
      </div>

      <div className="w-[100%] px-5 py-4 bg-[#121212] rounded-md font-gilroyMed text-[16px] text-[#909090]">
          <div className="space-y-2">
            <div className="flex justify-between">
              <h1>Subtotal : </h1>
              <h1 className="text-white">{subtotalPrice > 0 ? `$${subtotalPrice}` : ''}</h1>
            </div>
            <div className="flex justify-between">
              <h1>Tax : </h1>
              <h1 className="text-white">5%</h1>
            </div>
          </div>
          <Divider className="bg-[#909090]" />
          <div className="flex justify-between">
            <h1 className="text-[18px]">Total : </h1>
            <h1 className="text-[18px] text-white">{totalPrice > 0 ? `$${totalPrice}` : ''}</h1>
          </div>
      </div>
    </Drawer>
  )
}

export default CartDrawer