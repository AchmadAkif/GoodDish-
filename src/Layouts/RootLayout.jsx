import { useState } from 'react'
// Router
import { Outlet, useLocation, useNavigate } from "react-router-dom"
// Antd
import { ConfigProvider, Layout, Menu } from 'antd';
const { Header, Content, Sider } = Layout;
// Pages
import Navbar from '../Components/Navbar';


function RootLayout() {
  // Navigate Router
  const location = useLocation();
  const navigate = useNavigate()
  
  // Controlling POS Drawer
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const isShowCartBtn = location.pathname === '/POS'
  
  const [productOnCart, setProductOnCart] = useState([])
  
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemColor: "#909090", 
            itemHoverColor: "#fff",
            itemHoverBg: "#121212", 
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
        breakpoint="lg"
        collapsedWidth="0"
        style={{
          height: "100vh"
        }}
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Menu 
            className='h-full font-gilroyMed bg-black'  
            items={[
              {label: "Home", key:"/"},
              {label: "Food & Drinks", key:"POS"},
              {label: "About", key:"about"},   

              {label: "Setting"},
              {label: "Help"}
            ]}
            onClick={({ key }) => {
              navigate(key)
            }}>
          </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "#fff",
          }}
        >
          <Navbar showCartBtn={isShowCartBtn} drawerIsOpen={drawerIsOpen} setDrawerIsOpen={setDrawerIsOpen} productOnCart={productOnCart} />
        </Header>
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <Outlet context={[drawerIsOpen, setDrawerIsOpen, productOnCart, setProductOnCart]} />  
        </Content>
      </Layout>
    </Layout>
    </ConfigProvider>
  )
}

export default RootLayout
