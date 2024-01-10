// Antd
import { Drawer } from "antd"


const CartDrawer = ({onClose, drawerIsOpen, productOnCart, handleRemoveProduct}) => {
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
      <div className="w-[100%] p-3 space-y-5 bg-[#121212] rounded-md">
        {productOnCart.map( product => (
          <div key={product.id} className="px-3 py-2 space-y-3 bg-[#2d2d2d] rounded-md">
            <h1 className="font-gilroyBold text-[14px]">{product.name}</h1>
            <h1 className="font-gilroyBold text-[#909090]">${product.price}</h1>
          </div>
        ))}
      </div>
    </Drawer>
  )
}

export default CartDrawer