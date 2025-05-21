import productStore from "../store/useDataStore";

const ProductData = () => {
  const { product, fetchData, isloading } = productStore();

  return (
    <div>
      <button onClick={fetchData}>Click get Data</button>
      {isloading && <div>Loading ........ </div>}
      {product.data}
      {product.name}
      {product.house}
      {product.coffee}
    </div>
  );
};

export default ProductData;
