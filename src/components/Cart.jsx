import React, { useState } from 'react';

const Cart = () => {
  const [items, setItems] = useState([]);

  const addItemToCart = (item) => {
    setItems([...items, item]);
  };

  const removeItemFromCart = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  const goldProducts = [
    { name: 'Gold Ring', price: 200 },
    { name: 'Gold Necklace', price: 500 },
    { name: 'Gold Bracelet', price: 350 },
    { name: 'Gold Earrings', price: 150 },
    { name: 'Gold Chain', price: 300 },
    { name: 'Gold Watch', price: 700 },
    { name: 'Gold Anklet', price: 250 },
    { name: 'Gold Pendant', price: 400 },
    { name: 'Gold Brooch', price: 180 },
    { name: 'Gold Cufflinks', price: 120 },
  ];

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      <ul className="gold-products">
        {goldProducts.map((product, index) => (
          <li key={index} className="product">
            <span>{product.name} - ${product.price}</span>
            <button className="add-btn" onClick={() => addItemToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <h2 className="cart-title">Cart Items</h2>
      <ul className="cart-items">
        {items.map((item, index) => (
          <li key={index} className="cart-item">
            {item.name} - ${item.price}
            <button className="remove-btn" onClick={() => removeItemFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <p className="total-price">Total: ${getTotalPrice()}</p>
    </div>
  );
};

export default Cart;


const cartStyles = `
  .cart-container {
    max-width: 600px;
    margin: 20px auto;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }

  .cart-title {
    font-size: 24px;
    margin-top: 10px;
    margin-bottom: 5px;
    text-align: center;
  }

  .gold-products,
  .cart-items {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .product,
  .cart-item {
    padding: 10px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .add-btn,
  .remove-btn {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
  }

  .total-price {
    font-weight: bold;
    text-align: right;
  }
`;


const styleSheet = new CSSStyleSheet();
styleSheet.replaceSync(cartStyles);
document.adoptedStyleSheets = [styleSheet];
