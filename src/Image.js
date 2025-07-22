import products from "./products.js";

function Image() {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.image}</p>
        </div>
      ))}
    </div>
  );
}

export default Image;
