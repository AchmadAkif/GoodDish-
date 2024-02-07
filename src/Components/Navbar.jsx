// Antd
import { ShoppingCartOutlined } from '@ant-design/icons'
import { Badge, Button } from 'antd'


function Navbar({ setSearchKeyword, drawerIsOpen, setDrawerIsOpen, showCartBtn, productOnCart }) {
  const handleClick = () => {
    setDrawerIsOpen(!drawerIsOpen)
  }

  const handleSearch = (e) => {
    setSearchKeyword(e.target.value)
  }

  return (
    <div className='flex px-5 justify-end items-center font-gilroyBold'>
      <div className='space-x-3'>
        { showCartBtn ?
          <>
          <input onChange={handleSearch} type="text" placeholder="Type to search" className="h-[30px] outline-none bg-[#eaeaea] rounded-2xl px-3 font-gilroyMed" />
          <Badge count={productOnCart.length}>
            <Button className='bg-[#eaeaea] border-0 shadow-none' shape='circle' icon={<ShoppingCartOutlined/>} onClick={handleClick} />
          </Badge>
          </>
          : null }
      </div>
    </div>
  )
}

export default Navbar