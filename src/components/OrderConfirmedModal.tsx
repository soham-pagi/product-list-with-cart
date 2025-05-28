// import {  type SetStateAction } from "react";
import Header from "./Header";
import Button from "./Button";
import { useDataContext } from "../contexts/DataContextProvider";

// type TypeOrderConfirmationModalProps = {
//   open: boolean;
//   setOpen: React.Dispatch<SetStateAction<boolean>>;
// };

export default function OrderConfirmedModal() {
  return <Modal />;
}

function Modal() {
  const { cart, getTotalAmount, resetCart } = useDataContext();

  return (
    <dialog
      id="order-confirmation-dialog"
      className="z-10 fixed w-110 top-1/2 left-1/2 -translate-1/2 bg-white rounded-lg px-6 py-8 backdrop:bg-gray-50/50 backdrop:backdrop-blur-xs"
    >
      <form method="dialog">
        <img
          width={40}
          height={40}
          className="size-10"
          src="/images/icon-order-confirmed.svg"
          alt=""
        />
        <Header className="mt-4 mb-2 text-3xl" text="Order Confirmed" />
        <p className="font-extralight text-sm text-gray-500">
          We hope you enjoy your food!
        </p>

        <div className="bg-orange-50">
          <section className="rounded-lg mt-4 ">
            {cart.map(cartItem => (
              <Item key={cartItem.id} {...cartItem} />
            ))}
          </section>

          <div className="flex justify-between items-center py-5 px-2 mb-6">
            <p className="font-semibold text-gray-500">Order Total</p>
            <p className="text-3xl font-bold">{getTotalAmount().toFixed(2)}</p>
          </div>
        </div>

        <Button onClick={resetCart} className="py-3">Start New Order</Button>
      </form>
    </dialog>
  );
}

function Item({
  name,
  quantity,
  price,
}: {
  name: string;
  quantity: number;
  price: number;
}) {
  return (
    <div className="flex px-2 gap-2 items-center border-b-1 border-gray-200 py-4">
      <img
        width={48}
        height={40}
        className="size-12 object-cover rounded-lg "
        src="/images/image-waffle-thumbnail.jpg"
        alt=""
      />
      <div>
        <h6 className="font-semibold text-gray-700">{name}</h6>
        <div className="space-x-2">
          <span className="text-orange-700 font-semibold">{quantity}x</span>
          <span className="ml-2 text-gray-500">@ ${price.toFixed(2)}</span>
          <span className="text-gray-800">
            ${(price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
