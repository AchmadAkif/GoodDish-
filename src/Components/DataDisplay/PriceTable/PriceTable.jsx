import { Divider } from 'antd';

import RadioGroup from './RadioGroup';

const PriceTable = ({ subtotalPrice, totalPrice, onPlaceOrder }) => {
  return (
    <>
      <div className="w-[100%] px-5 py-4 bg-[#121212] rounded-md font-gilroyMed text-[16px] text-[#909090]">
        <div className="space-y-2">
          <div className="flex justify-between">
            <h1>Subtotal : </h1>
            <h1 className="text-white">
              {subtotalPrice > 0 ? `$${subtotalPrice}` : ''}
            </h1>
          </div>
          <div className="flex justify-between">
            <h1>Tax : </h1>
            <h1 className="text-white">2%</h1>
          </div>
        </div>
        <Divider className="bg-[#909090]" />
        <div className="flex justify-between">
          <h1 className="text-[18px]">Total : </h1>
          <h1 className="text-[18px] text-white">
            {totalPrice > 0 ? `$${totalPrice}` : ''}
          </h1>
        </div>
      </div>

      <RadioGroup onPlaceOrder={() => onPlaceOrder(subtotalPrice)} />
    </>
  );
};

export default PriceTable;