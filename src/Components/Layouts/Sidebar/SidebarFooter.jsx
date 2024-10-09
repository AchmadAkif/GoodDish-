import { Divider } from "antd";

const SidebarFooter = () => {
  return (
    <div className="flex flex-col justify-between bg-[#121212] pl-4 py-6 space-y-[15px]">
      <div className="flex items-center">
        <h1 className="text-white text-[18px] font-gilroyBold">
          GoodDish!
        </h1>
        <Divider
          type="vertical"
          style={{ borderLeft: '1px solid #909090' }}
        />
        <h1 className="text-white text-[18px] font-gilroyReg">POS</h1>
      </div>
      <div className="flex space-x-5">
        <a href="#" className="text-white font-gilroyMed">
          Legal Center
        </a>
        <a href="#" className="text-white font-gilroyMed">
          Support
        </a>
      </div>
      <p className="text-[#909090] text-[12px] font-gilroyReg">
        GoodDish! and GoodDish! POS is a registered brandmark of
        GoodDish! Inc 2024
      </p>
    </div>
  );
};

export default SidebarFooter;