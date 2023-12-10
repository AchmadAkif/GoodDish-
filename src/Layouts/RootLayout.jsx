import React from 'react'

// Router
import { NavLink, Outlet, useNavigate } from "react-router-dom"

// Antd
import { Layout, Menu, theme, Divider } from 'antd';
import Navbar from '../Components/Navbar';
const { Header, Content, Sider } = Layout;

function RootLayout() {
  const navigate = useNavigate()

  return (
    <Layout>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          background: '#000000'
        }}>
        <Menu 
          className='font-gilroyMed bg-black text-white'
          theme='dark'
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
      <Layout className='site-layout' style={{marginLeft: 200, marginRight: 200}}>
        <Header className='bg-white'>
          <Navbar/>
        </Header>
        <Content className='px-[20px] py-10 bg-[#eaeaea]'>
          <Outlet />  
        </Content>
      </Layout>
      <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        right: 0,
        top: 0,
        bottom: 0,
        background: '#000000'
      }}>

      </Sider>
    </Layout>
  )
}

export default RootLayout
