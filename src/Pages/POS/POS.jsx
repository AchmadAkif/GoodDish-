// Component
import Carousel from '../../Components/DataDisplay/Carousel/Carousel.component';
import CartDrawer from '../../Components/DataDisplay/CartDrawer/CartDrawer.component';
import LoadingSkeleton from '../../Components/Commons/Skeleton';

// Hooks
import { useOutletContext } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';

function POS() {

  const [
    searchKeyword,
    drawerIsOpen,
    onClickDrawer,
    productOnCart,
    setProductOnCart,
    revenue,
    setRevenue,
    itemSold,
    setItemSold,
    notifySuccess,
  ] = useOutletContext();

  // Fetch
  const { data: productData, isLoading } = useFetch(
    'https://good-dish-json-server.vercel.app/products',
  );

  const handleRemoveProduct = (id) => {
    setProductOnCart(productOnCart.filter((product) => product.id !== id));
  };

  const handleRemoveAmount = (dataID) => {
    let checkProductIsExist = productOnCart.find((data) => dataID === data.id);

    if (checkProductIsExist) {
      let newCart = [];
      let newItem;

      productOnCart.forEach((dataProduct) => {
        if (dataProduct.id == dataID) {
          newItem = {
            ...dataProduct,
            amount: dataProduct.amount - 1,
          };

          newCart.push(newItem);
        } else {
          newCart.push(dataProduct);
        }
      });

      setProductOnCart(newCart);
    }
  };

  const handlePlaceOrder = (subtotalPrice) => {
    let quantity = 0;

    productOnCart.forEach((product) => {
      quantity += product.amount;
    });

    notifySuccess('Order Success!');
    setItemSold(itemSold + quantity);
    setRevenue(revenue + subtotalPrice);
    setProductOnCart([]);
  };

  return (
    <div className="space-y-[20px]">
      <div>
        <h1 className="font-gilroyBold text-[18px] pl-[30px] mb-3">Soups</h1>
        {isLoading && <LoadingSkeleton />}
        {productData && (
          <Carousel
            searchKeyword={searchKeyword}
            productData={productData.soups}
          />
        )}
      </div>
      <div>
        <h1 className="font-gilroyBold text-[18px] pl-[30px] mb-3">Salads</h1>
        {isLoading && <LoadingSkeleton />}
        {productData && (
          <Carousel
            searchKeyword={searchKeyword}
            productData={productData.salads}
          />
        )}
      </div>
      <CartDrawer
        onClickDrawer={onClickDrawer}
        drawerIsOpen={drawerIsOpen}
        productOnCart={productOnCart}
        onRemoveAmount={handleRemoveAmount}
        onRemoveProduct={handleRemoveProduct}
        onPlaceOrder={handlePlaceOrder}
      />
    </div>
  );
}

export default POS;
