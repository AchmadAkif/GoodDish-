// Antd
import { ShoppingCartOutlined } from '@ant-design/icons'
import { Button } from 'antd'


function Navbar({ drawerIsOpen, setDrawerIsOpen, showCartBtn }) {
  const handleClick = () => {
    setDrawerIsOpen(!drawerIsOpen)
  }

  return (
    <div className='flex justify-between items-center font-gilroyBold'>
      <h1 className="text-[25px]">GoodDish!</h1>
      <div>
        <input type="text" placeholder="Type to search" className="h-[30px] outline-none bg-[#eaeaea] rounded-2xl px-3 font-gilroyMed" />
        { showCartBtn ?
          <Button icon={<ShoppingCartOutlined/>} onClick={handleClick} />
          : null }
      </div>
    </div>
  )
}

export default Navbar