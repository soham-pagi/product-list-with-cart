import { useDataContext } from "../contexts/DataContextProvider";

type TypeCartItemProps = {
  id: number;
  name: string;
  quantity: number;
  price: number;
};

export default function CartItem({
  id,
  name,
  price,
  quantity,
}: TypeCartItemProps) {
  const { removeFromCart } = useDataContext();
  return (
    <section className="relative pb-5 border-b-1 border-gray-300">
      <h4 className="font-semibold text-gray-700">{name}</h4>
      <div className="space-x-2">
        <span className="text-orange-700 font-semibold">{quantity}x</span>
        <span className="ml-2 text-gray-500">@ ${price.toFixed(2)}</span>
        <span className="text-gray-800">${(price * quantity).toFixed(2)}</span>
      </div>

      <button
        onClick={() => removeFromCart(id, true)}
        className="absolute right-2 top-1/2 -translate-y-1/2 hover:brightness-90 border size-5 border-gray-500 rounded-full px-1"
      >
        <img
          className=""
          src="/product-list-with-cart/images/icon-remove-item.svg"
          alt="remove cart item"
        />
      </button>
    </section>
  );
}
