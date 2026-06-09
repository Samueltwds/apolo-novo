import { useState, useEffect } from "react";
import "./App.css";

import { products } from "./data/products.js";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";

function App() {
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // ✅ NOVO: estado da animação do botão
  const [clicked, setClicked] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  // ✅ SCROLL REVEAL (melhorado)
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      elements.forEach((el) => {
        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 80) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    // ✅ limpa listener (profissional)
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <header className="navbar">
        <h1>Apolo</h1>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="toggle"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </header>

      <section className="hero">
        <div className="content">
          <h1 className="reveal">O FONE DOS DEUSES</h1>

          {/* ✅ BOTÃO COM ANIMAÇÃO */}
          <button
            className={`btn-primary ${clicked ? "clicked" : ""}`}
            onClick={() => {
              addToCart(products[0]);

              setClicked(true);
              setTimeout(() => setClicked(false), 250);
            }}
          >
            Comprar
          </button>
        </div>
      </section>

      <section className="features reveal">
        <h2>Por que escolher Apolo?</h2>
        <p>Qualidade premium, bateria longa e design moderno.</p>
      </section>

      {/* ✅ também animar o carrinho */}
      <div className="reveal">
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>

      <button
        onClick={() => setShowCheckout(!showCheckout)}
        className="btn-primary"
      >
        Ir para checkout
      </button>

      {showCheckout && <Checkout cart={cart} />}
    </div>
  );
}

export default App;
