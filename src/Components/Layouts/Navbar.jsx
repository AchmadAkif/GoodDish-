import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge, Button } from 'antd';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleDrawer } from '../DataDisplay/CartDrawer/slice';

const Navbar = ({
  searchKeyword,
  handleSearchQuery,
  productOnCart,
}) => {
  const isOnLocation = useLocation().pathname === '/POS';

  const dispatch = useDispatch();

  return (
    <>
      {isOnLocation ? (
        <div className="flex px-5 justify-end items-center font-gilroyBold">
          <div className="space-x-3">
            <input
              onChange={(e) => handleSearchQuery(e.target.value)}
              value={searchKeyword}
              type="text"
              placeholder="Type to search"
              className="h-[30px] outline-none bg-[#eaeaea] rounded-2xl px-3 font-gilroyMed"
            />
            <Badge count={productOnCart.length}>
              <Button
                className="bg-[#eaeaea] border-0 shadow-none"
                shape="circle"
                icon={<ShoppingCartOutlined />}
                onClick={() => dispatch(toggleDrawer())}
              />
            </Badge>
          </div>
        </div>
      ) : (
        <div className="flex px-5 items-center font-gilroyBold">
          <h1 className="text-[18px]">Dashboard</h1>
        </div>
      )}
    </>
  );
};

export default Navbar;
