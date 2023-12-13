// React
import React, { useState } from 'react'

// Router
import { NavLink, Outlet, useNavigate } from "react-router-dom"

// Antd
import { Layout, Menu } from 'antd';
const { Header, Content, Sider } = Layout;

// Pages
import Navbar from '../Components/Navbar';

function RootLayout() {
  const navigate = useNavigate()

  const [collapsed, setCollapsed] = useState(true)

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
      <Layout className='site-layout' style={{marginLeft: 200}}>
        <Header className='bg-white pr-0'>
          <Navbar parentCollapsed={collapsed} setParentCollapsed={setCollapsed} />
        </Header>
        <Content className='px-[20px] py-10 bg-[#eaeaea]'>
          <Outlet />  
        </Content>
      </Layout>
      <Sider 
      style={{height: '100vh', background: '#000000'}} width={500} trigger={null} collapsible collapsed={collapsed}>
      </Sider>
    </Layout>
  )
}

export default RootLayout
