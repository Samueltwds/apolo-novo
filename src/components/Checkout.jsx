export default function Checkout({ cart }) {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="checkout">
      <h2>Checkout</h2>

      <p>Total: R$ {total.toFixed(2)}</p>

      <button className="btn-primary">
        Finalizar Compra
      </button>
    </div>
  );
}