import cn from "@meltdownjs/cn";
import Button from "./Button";
import CartItem from "./CartItem";
import Header from "./Header";
import { useDataContext } from "../contexts/DataContextProvider";

export default function Cart({
  openModal,
  className,
}: {
  className?: string;
  openModal: () => void;
}) {
  const { cart, getTotalAmount, getTotalItemsCount } = useDataContext();
  const cartItemsCount = getTotalItemsCount();

  return (
    <div className={cn("rounded-lg md:min-w-84 px-8 py-2 self-start bg-white", `${cartItemsCount === 0 && 'flex flex-col items-center justify-center pb-8'}`, className)}>
      <Header
        className="text-3xl font-bold text-orange-700 py-6"
        text={`Your Cart (${getTotalItemsCount()})`}
      />

      {cartItemsCount > 0 ? (
        <>
          <div className="space-y-5">
            {cart.map((cartItem) => (
              <CartItem key={cartItem.id} {...cartItem} />
            ))}
          </div>

          <div className="flex justify-between items-center mt-10">
            <p className="font-semibold text-gray-500">Order Total</p>
            <p className="text-4xl font-bold">${getTotalAmount()}</p>
          </div>

          <div className="my-10 flex justify-center gap-1 items-center bg-orange-50 p-4 rounded-lg">
            <img src="/images/icon-carbon-neutral.svg" alt="tree image" />
            <p className="font-thin text-sm">
              This is a <span className="font-semibold">carbon-neutral</span>{" "}
              delivery
            </p>
          </div>
          <Button onClick={openModal}>Confirm Order</Button>
        </>
      ) : (
        <>
        <img src="/images/illustration-empty-cart.svg" alt="" />
        <p className="text-xs font-semibold text-orange-950">Your added items will appear here.</p>
        </>
      )}
    </div>
  );
}
