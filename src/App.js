import "./App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import products from "./products.js"; // Assuming products.js is in the same directory

let name = prompt("Enter your name:");
function App() {
  if (!name) {
    name = " mysterious";
  }
  return (
    <div className="App">
      <h1>Hello there, {name}!</h1>

      {name !== "mysterious" && (
        <img
          src="https://tse2.mm.bing.net/th/id/OIP.Cdl-I_YRSsTHME45iPfnIAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="welcome"
          width="350"
          height="350"
        />
      )}

      {products.map((product, index) => (
        <Card key={index} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default App;
