import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ConfigProvider, Layout } from 'antd';
import { ToastContainer } from 'react-toastify';
import { notifySuccess, notifyError } from '../utils/toastify';
const { Header, Content } = Layout;

import Navbar from '../Components/Layouts/Navbar';
import Sidebar from '../Components/Layouts/Sidebar/Sidebar';

function RootLayout() {
  // Navigate Router
  const location = useLocation();
  const navigate = useNavigate();

  // Controlling POS Drawer
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const isOnLocation = location.pathname === '/POS';

  // Global State
  const [searchKeyword, setSearchKeyword] = useState('');
  const [productOnCart, setProductOnCart] = useState([]);
  const [revenue, setRevenue] = useState(0);
  const [itemSold, setItemSold] = useState(0);

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemColor: '#909090',
            itemHoverColor: '#fff',
            itemHoverBg: '#121212',
            itemDisabledColor: '#525252',
          },
          Radio: {
            buttonBg: '#1F1F1F',
            buttonColor: '#fff',
            colorBorder: '#1f1f1f',
            buttonSolidCheckedBg: '#fff',
            buttonSolidCheckedColor: '#000',
            buttonSolidCheckedHoverBg: '#ff',
          },
        },
      }}
    >
      <Layout>
        <Sidebar navigate={navigate} />
        <Layout>
          <Header
            style={{
              padding: 0,
              background: '#fff',
            }}
          >
            <Navbar
              setSearchKeyword={setSearchKeyword}
              showCartBtn={isOnLocation}
              drawerIsOpen={drawerIsOpen}
              setDrawerIsOpen={setDrawerIsOpen}
              productOnCart={productOnCart}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px 0',
            }}
          >
            <Outlet
              context={[
                searchKeyword,
                drawerIsOpen,
                setDrawerIsOpen,
                productOnCart,
                setProductOnCart,
                revenue,
                setRevenue,
                itemSold,
                setItemSold,
                notifySuccess,
                notifyError,
              ]}
            />
            <ToastContainer />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

export default RootLayout;
