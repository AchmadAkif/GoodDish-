// Hooks
import { useOutletContext } from 'react-router-dom';

// Antd
import { DollarOutlined, ShopOutlined } from '@ant-design/icons';

function Home() {
  const [
    searchKeyword,
    drawerIsOpen,
    setDrawerIsOpen,
    productOnCart,
    setProductOnCart,
    revenue,
    setRevenue,
    itemSold,
    setItemSold,
  ] = useOutletContext();

  return (
    <div className="w-full space-y-5 sm:space-y-0 sm:space-x-5 sm:flex">
      <div className="max-w-[350px] min-w-[250px] p-5 bg-white font-gilroyBold text-[18px] rounded-xl shadow-md space-y-6">
        <DollarOutlined
          style={{
            fontSize: 25,
          }}
        />
        <h1>Revenue</h1>
        <span>${revenue}</span>
      </div>
      <div className="max-w-[350px] min-w-[250px] p-5 bg-white font-gilroyBold text-[18px] rounded-xl shadow-md space-y-6">
        <ShopOutlined
          style={{
            fontSize: 25,
          }}
        />
        <h1>Dishes Sold</h1>
        <span>{itemSold}</span>
      </div>
    </div>
  );
}

export default Home;
