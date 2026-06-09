export default function Cart({ cart, removeFromCart }) {
  return (
    <div className="cart">
      <h2>Carrinho</h2>

      {cart.length === 0 && <p>Vazio</p>}

      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          {item.image}

          <div>
            <p>{item.name}</p>
            <span>R$ {item.price.toFixed(2)}</span>
          </div>

          <button onClick={() => removeFromCart(index)}>X</button>
        </div>
      ))}
    </div>
  );
}