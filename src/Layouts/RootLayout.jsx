import { useState } from 'react'
// Router
import { Outlet, useLocation, useNavigate } from "react-router-dom"
// Antd
import { ConfigProvider, Layout, Menu, Divider } from 'antd';
const { Header, Content, Sider } = Layout;
// Pages
import Navbar from '../Components/Navbar';


function RootLayout() {
  // Navigate Router
  const location = useLocation();
  const navigate = useNavigate()
  
  // Controlling POS Drawer
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const isOnLocation = location.pathname === '/POS'
  
  // Global State
  const [searchKeyword, setSearchKeyword] = useState('')
  const [productOnCart, setProductOnCart] = useState([])
  const [revenue, setRevenue] = useState(0)
  const [itemSold, setItemSold] = useState(0)
  
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemColor: "#909090", 
            itemHoverColor: "#fff",
            itemHoverBg: "#121212", 
            itemDisabledColor: "#525252",
          },
          Radio: {
            buttonBg: "#1F1F1F",
            buttonColor: "#fff",
            colorBorder: "#1f1f1f",
            buttonSolidCheckedBg: "#fff",
            buttonSolidCheckedColor: "#000",
            buttonSolidCheckedHoverBg: "#ff",
            
          }
        },
      }}
    >
      <Layout>
      <Sider
        width="250px"
        breakpoint="lg"
        collapsedWidth="0"
        style={{
          height: "100vh",
          background: "#000",
        }}
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className='h-[100vh] flex flex-col justify-between'>
          <div>
          <div className='h-[100px] flex items-center justify-center bg-[#121212]'>
            <h1 className='text-white text-[30px] font-gilroyBold'>GoodDish!</h1>
          </div>
          <Menu 
            className='font-gilroyMed text-[18px] bg-black'  
            items={[
              {label: "Home", key:"/"},
              {label: "Food & Drinks", key:"POS"},
              {label: "About", key:"about"},   
              {label: "Messages", disabled: true},
              {label: "Bills", disabled: true},

              {label: "Setting", disabled: true},
              {label: "Help", disabled: true}
            ]}
            onClick={({ key }) => {
              navigate(key)
            }}>
          </Menu>
          </div>
          <div className='flex flex-col justify-between bg-[#121212] pl-4 py-6 space-y-[15px]'>
            <div className='flex items-center'>
              <h1 className='text-white text-[18px] font-gilroyBold'>GoodDish!</h1>
              <Divider type='vertical' style={{borderLeft: "1px solid #909090"}} />
              <h1 className='text-white text-[18px] font-gilroyReg'>POS</h1>
            </div>
            <div className='flex space-x-5'>
              <a href="#" className='text-white font-gilroyMed'>Legal Center</a>
              <a href="#" className='text-white font-gilroyMed'>Support</a>
            </div>
            <p className='text-[#909090] text-[12px] font-gilroyReg'>GoodDish! and GoodDish! POS is a registered brandmark of GoodDish! Inc 2024</p>
          </div>
        </div>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "#fff",
          }}
        >
          <Navbar setSearchKeyword={setSearchKeyword} showCartBtn={isOnLocation} drawerIsOpen={drawerIsOpen} setDrawerIsOpen={setDrawerIsOpen} productOnCart={productOnCart} />
        </Header>
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <Outlet context={[
            searchKeyword, 
            drawerIsOpen, 
            setDrawerIsOpen, 
            productOnCart, 
            setProductOnCart, 
            revenue, 
            setRevenue,
            itemSold,
            setItemSold
            ]} />  
        </Content>
      </Layout>
    </Layout>
    </ConfigProvider>
  )
}

export default RootLayout
