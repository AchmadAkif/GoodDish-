import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ConfigProvider, Layout } from 'antd';
import { ToastContainer } from 'react-toastify';
import { notifySuccess, notifyError } from '../utils/toastify';
import { Provider } from 'react-redux';

import store from '../Redux/store';
import configProvider from '../Themes/configProvider';
import Navbar from '../Components/Layouts/Navbar';
import Sidebar from '../Components/Layouts/Sidebar/Sidebar';

const { Header, Content } = Layout;

function RootLayout() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [productOnCart, setProductOnCart] = useState([]);
  const [revenue, setRevenue] = useState(0);
  const [itemSold, setItemSold] = useState(0);

  const onSearchQuery = (value) => {
    setSearchKeyword(value);
  };

  return (
    <ConfigProvider theme={configProvider}>
      <Provider store={store}>
        <Layout>
          <Sidebar />
          <Layout>
            <Header style={{ padding: 0, background: '#fff' }}>
              <Navbar
                handleSearchQuery={onSearchQuery}
                searchKeyword={searchKeyword}
                productOnCart={productOnCart}
              />
            </Header>
            <Content style={{ margin: '24px 16px 0' }}>
              <Outlet
                context={[
                  searchKeyword,
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
      </Provider>
    </ConfigProvider>
  );
}

export default RootLayout;
