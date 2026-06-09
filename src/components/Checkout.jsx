import { useState } from "react";
import Success from "./Success.jsx";

export default function Checkout({ cart }) {
  const [finished, setFinished] = useState(false);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  // ✅ mostra tela de sucesso
  if (finished) {
    return (
      <Success onClose={() => setFinished(false)} />
    );
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>

      <p>Total: R$ {total.toFixed(2)}</p>

      <button
        className="btn-primary"
        onClick={() => setFinished(true)}
      >
        Finalizar Compra
      </button>
    </div>
  );
}
`
