import products from "./products.js";

function Description() {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Description;
