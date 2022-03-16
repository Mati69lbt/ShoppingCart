import { TYPES } from "../actions/shoppingActions";

export const shoppingInitialState = {
  products: [
    { id: 1, name: "Bicicleta Venzo ", price: 112.657 },
    { id: 2, name: "Computadora Asus ", price: 90.355 },
    { id: 3, name: "Smart TV Philips", price: 37.547 },
    { id: 4, name: "Micriondas BGH", price: 47.359 },
    { id: 5, name: "Ventilador Atma", price: 4.254 },
    { id: 6, name: "Monitor LG", price: 9.725 },
    { id: 7, name: "Heladera GAFA", price: 66.074 },
    { id: 8, name: "Iphone 6sPlus", price: 74.037 },
    { id: 9, name: "Ford Ranger 2010", price: 985.527 },
    { id: 10, name: "Estufa Volcan", price: 22.654 },
    { id: 10, name: "Computadora Lenovo", price: 58.427 },
    { id: 10, name: "Lavarropas  Dream", price: 65.357 },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      //1. Buscar el id en la lista de productos q tenemos q lo recibe como payload y guardarlo en una variable (newItem)
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      //console.log(newItem);
      //2. Verificamos que el producto no se duplique y lo guardamos en una variable (itemIncart)
      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            // SI EXISTE YA EL PRODUCTO:
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            // SI NO ENCONTRO UN ITEM IGUAL:  retornamos el estado del carrito con el nuevo item y le adicionamos una nueva propiedad (quantity) con el numero 1(seria el primer item del carrito)
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART:
      return shoppingInitialState;

    default:
      return state;
  }
}
