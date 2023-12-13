import {useState} from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button } from 'antd'

function Navbar({parentCollapsed, setParentCollapsed}) {
  const [childCollapsed, setChildCollapsed] = useState(false)

  return (
    <div className='flex justify-between items-center font-gilroyBold'>
      <h1 className="text-[25px]">GoodDish!</h1>
      <div>
        <input type="text" placeholder="Type to search" className="h-[30px] outline-none bg-[#eaeaea] rounded-2xl px-3 font-gilroyMed" />
        <Button
              type="text"
              icon={childCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => {
                setChildCollapsed(!childCollapsed)
                setParentCollapsed(!parentCollapsed)
              }}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
        />
      </div>
    </div>
  )
}

export default Navbar