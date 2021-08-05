import { TYPES } from "../actions/shoppingAction";

export const shoppingInitialState = {
  products: [
    { id: 1, name: "Producto 1", price: 100 },
    { id: 2, name: "Producto 2", price: 200 },
    { id: 3, name: "Producto 3", price: 300 },
    { id: 4, name: "Producto 4", price: 400 },
    { id: 5, name: "Producto 5", price: 500 },
    { id: 6, name: "Producto 6", price: 600 },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find((item) => item.id === action.payload);

      let updateItem = state.cart.find((item) => item.id === newItem.id);

      return updateItem
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === updateItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      let removeItem = state.cart.find((item) => item.id === action.payload);

      return removeItem.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === removeItem.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== removeItem.id),
          };
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      let removeItem = state.cart.find((item) => item.id === action.payload);
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== removeItem.id),
      };
    }
    case TYPES.CLEAR_CART:
      return shoppingInitialState;
    default:
      return state;
  }
}
