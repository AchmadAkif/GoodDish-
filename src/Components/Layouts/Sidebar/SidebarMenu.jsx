import { Menu } from 'antd';

const SidebarMenu = ({ navigate }) => {
  return (
    <>
      <div className="h-[100px] flex items-center justify-center bg-[#121212]">
        <h1 className="text-white text-[30px] font-gilroyBold">
          GoodDish!
        </h1>
      </div>
      <Menu
        className="font-gilroyMed text-[18px] bg-black"
        items={[
          { label: 'Home', key: '/' },
          { label: 'Food & Drinks', key: 'POS' },
          { label: 'About', key: 'about' },
          { label: 'Messages', disabled: true },
          { label: 'Bills', disabled: true },

          { label: 'Setting', disabled: true },
          { label: 'Help', disabled: true },
        ]}
        onClick={({ key }) => {
          navigate(key);
        }}
      ></Menu>
    </>
  );
};

export default SidebarMenu;