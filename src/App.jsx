import { useState } from 'react';
import './App.css';

// Pääsovellus
function App() {
  return (
    <>
      <Header />
      <Product />
    </>
  );
}

// Header-komponentti
function Header() {
  return (
    <div className="content">
      <h2>Welcome to product page</h2>
    </div>
  );
}

// Tuotelistaus ja tilauksen hallinta
function Product() {
  const [counter, setCounter] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState('iPhone');

  const products = [
    { name: 'iPhone', price: 450 },
    { name: 'RTX 3060', price: 610 },
    { name: 'Airpods Pro 2', price: 270 },
    { name: 'MSI Katana', price: 1220 },
    { name: 'Logitech G Pro X', price: 320 },
  ];

  // Valitun tuotteen haku
  const currentProduct = products.find((p) => p.name === selectedProduct);
  const totalPrice = currentProduct ? currentProduct.price * counter : 0;

  // Määrän lisääminen
  const incrementCounter = () => setCounter(counter + 1);

  // Määrän vähentäminen
  const decrementCounter = () => {
    if (counter > 1) setCounter(counter - 1);
  };

  // Valinnan muuttaminen
  const handleSelectChange = (event) => setSelectedProduct(event.target.value);

  return (
    <div>
      <h1>Select product</h1>

      <div className="valikko">
        <p>Product:</p>
        <select value={selectedProduct} onChange={handleSelectChange}>
          {products.map((product) => (
            <option key={product.name} value={product.name}>
              {product.name} ({product.price}€)
            </option>
          ))}
        </select>
      </div>

      <div className="Counterbtn">
        <p>Quantity:</p>
        <button onClick={decrementCounter}>-</button>
        <p>{counter}</p>
        <button onClick={incrementCounter}>+</button>
      </div>

      <OrderInfo
        product={selectedProduct}
        quantity={counter}
        totalPrice={totalPrice}
      />
    </div>
  );
}

// Tilauksen tiedot
function OrderInfo({ product, quantity, totalPrice }) {
  return (
    <div>
      <h2>Order Info</h2>
      <div className="grid-container">
        <div className="grid-item">Product</div>
        <div className="grid-item">Quantity</div>
        <div className="grid-item">Total</div>
        <div className="grid-item">{product}</div>
        <div className="grid-item">{quantity}</div>
        <div className="grid-item">{totalPrice}€</div>
      </div>
    </div>
  );
}

export default App;
