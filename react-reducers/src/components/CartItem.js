const CartItem = ({ data, delToCart }) => {
  let { id, name, price, quantity } = data;
  return (
    <div style={{ borderBottom: "thin solid gray" }}>
      <h4>{name}</h4>
      <h5>
        ${price}.00 X {quantity} = ${price * quantity}.00
      </h5>
      <button
        onClick={() => delToCart(id)}
        style={{ margin: "0 0.4rem 0.4rem 0" }}
      >
        Eliminar uno
      </button>
      <button
        onClick={() => delToCart(id, true)}
        style={{ margin: "0 0.4rem 0.4rem 0" }}
      >
        Eliminar todo
      </button>
    </div>
  );
};

export default CartItem;
