import { useDispatch } from "react-redux";
import { Radio, Button } from "antd";

const RadioGroup = ({ onPlaceOrder }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-center items-center">
      <Radio.Group
        defaultValue="a"
        buttonStyle="solid"
        optionType="button"
        className="py-5"
      >
        <Radio.Button value="a" className="font-gilroyBold">
          Cash
        </Radio.Button>
        <Radio.Button value="b" className="font-gilroyBold">
          Debit
        </Radio.Button>
        <Radio.Button value="c" className="font-gilroyBold">
          E-Wallet
        </Radio.Button>
      </Radio.Group>

      <Button
        className="w-full h-[60px] bg-white font-gilroyBold text-[16px] text-black"
        type="primary"
        onClick={() => dispatch()}
      >
        Place Order
      </Button>
    </div>
  );
};

export default RadioGroup;