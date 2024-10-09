import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ConfigProvider, Layout } from 'antd';
import { ToastContainer } from 'react-toastify';
import { notifySuccess, notifyError } from '../utils/toastify';
import configProvider from '../Themes/configProvider';
const { Header, Content } = Layout;


import Navbar from '../Components/Layouts/Navbar';
import Sidebar from '../Components/Layouts/Sidebar/Sidebar';

function RootLayout() {
  // Controlling POS Drawer
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  // Global State
  const [searchKeyword, setSearchKeyword] = useState('');
  const [productOnCart, setProductOnCart] = useState([]);
  const [revenue, setRevenue] = useState(0);
  const [itemSold, setItemSold] = useState(0);

  const onOpenDrawer = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  const onSearchQuery = (value) => {
    setSearchKeyword(value);
  };

  return (
    <ConfigProvider theme={configProvider}>
      <Layout>
        <Sidebar />
        <Layout>
          <Header style={{ padding: 0, background: '#fff' }}>
            <Navbar
              handleSearchQuery={onSearchQuery}
              searchKeyword={searchKeyword}
              handleOpenDrawer={onOpenDrawer}
              productOnCart={productOnCart}
            />
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
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
