import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

import data from "../data/data.json";

type TypeDataContextProviderProps = {
  children: ReactNode;
};

type TypeProduct = {
  id: number;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
};

type TypeCart = {
  id: number;
  name: string;
  quantity: number;
  price: number;
};

type TypeThemeContext = {
  products: TypeProduct[];
  cart: TypeCart[];
  setCart: Dispatch<SetStateAction<TypeCart[]>>;
  addToCart: (id: number) => void;
  removeFromCart: (id: number, removeAll?: boolean) => void;
  getQuantity: (id: number) => number;
  getTotalAmount: () => number;
  getTotalItemsCount: () => number;
  resetCart: () => void;
};

const DataContext = createContext<TypeThemeContext | null>(null);

export default function DataContextProvider({
  children,
}: TypeDataContextProviderProps) {
  const [products, _] = useState(data);
  const [cart, setCart] = useState<TypeCart[]>([]);

  function getTotalItemsCount() {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }

  function getTotalAmount() {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0);
  }

  function getQuantity(id: number) {
    const cartItem = cart.find((item) => item.id === id);
    if (!cartItem) return 0;

    return cartItem.quantity;
  }

  function removeFromCart(id: number, removeAll = false) {
    const product = products.find((item) => item.id === id);
    if (!product) throw new Error("No such product!");

    const cartItem = cart.find((item) => item.id === id);
    if (!cartItem) throw new Error("No such product in the cart!");

    setCart(prev => {
        if (removeAll || cartItem.quantity === 1) {
            return prev.filter(item => item.id !== id);
        }

        return prev.map(item => item.id === id ? { ...item, quantity: item.quantity - 1} : item);
    })
  }

  function addToCart(id: number) {
    const product = products.find((item) => item.id === id);

    if (!product) throw new Error("No such product!");

    setCart((prev) => {
      const cartItem = prev.find((item) => item.id === id);

      if (cartItem) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [
          ...prev,
          {
            id,
            name: product.name,
            price: product.price,
            quantity: 1,
          },
        ];
      }
    });
  }

  function resetCart() {
    setCart([]);
  }

  return (
    <DataContext.Provider
      value={{ cart, setCart, products, addToCart, removeFromCart, getQuantity, getTotalAmount, getTotalItemsCount, resetCart }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error(
      "useDataContext must be used withitn a DataContextProvider!"
    );
  }

  return context;
}
