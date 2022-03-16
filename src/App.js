import "./App.css";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div>
      <h1 style={{ marginLeft: "15%" }}>Carrito de Compras con useReducers</h1>
      <hr />
      <ShoppingCart />
    </div>
  );
}

export default App;
