export default function Success({ onClose }) {
  return (
    <div className="success-overlay">
      <div className="success-box">
        
        <h1>Compra realizada ✅</h1>

        <p>
          Obrigado por escolher a Apolo.
          <br />
          Seu pedido está sendo processado com sucesso.
        </p>

        <button className="btn-primary" onClick={onClose}>
          Voltar à loja
        </button>

      </div>
    </div>
  );
}
