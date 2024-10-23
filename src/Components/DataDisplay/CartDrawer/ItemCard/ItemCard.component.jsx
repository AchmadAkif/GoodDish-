import { DeleteOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { InputNumber, Button } from 'antd';
import { useDispatch } from 'react-redux';

const ItemCard = ({ product, onRemoveProduct, onAddAmount, onRemoveAmount }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="flex justify-between items-end px-4 py-3 space-y-3 bg-[#1F1F1F] rounded-md"
    >
      <div className="space-y-2">
        <h1 className="font-gilroyBold text-[18px]">{product.name}</h1>
        <h1 className="font-gilroyBold text-[#909090] text-[16px]">
          ${product.price}
        </h1>
        <div className="space-x-2">
          <Button
            className="bg-[#2d2d2d] border-0 shadow-none"
            type={'primary'}
            icon={<MinusOutlined />}
            onClick={() => onRemoveAmount(product.id)}
          />
          <InputNumber
            defaultValue={product.amount}
            value={product.amount}
            controls={false}
          />
          <Button
            className="bg-[#2d2d2d] border-0 shadow-none"
            type={'primary'}
            icon={<PlusOutlined />}
            onClick={() => onAddAmount(product.id)}
          />
        </div>
      </div>
      <Button
        className="bg-[#2d2d2d] border-0 shadow-none"
        type={'primary'}
        icon={<DeleteOutlined />}
        onClick={() => onRemoveProduct(product.id)}
      />
    </div>
  );
};

export default ItemCard;