import products from "./products.js";

function Price() {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Price;
