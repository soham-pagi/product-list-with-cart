import { useDataContext } from "../contexts/DataContextProvider";

type TypeItemCardProps = {
  id: number;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
  name: string;
  price: number;
};

export default function ItemCard({
  id,
  image,
  category,
  name,
  price,
}: TypeItemCardProps) {
  const { getQuantity, addToCart, removeFromCart } = useDataContext();
  const quantity = getQuantity(id);

  return (
    <section>
      <div className="relative">
        <img
          className={`w-full object-cover rounded-lg border-2 ${
            quantity > 0 ? "border-orange-700" : "border-transparent"
          }`}
          src={`/product-list-with-cart/${image.desktop}`}
          srcSet={`/product-list-with-cart/${image.mobile} 320w, /product-list-with-cart/${image.tablet} 680w, /product-list-with-cart/${image.desktop} 960w`}
          alt={name}
        />
        <div
          className={`min-w-40 bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 absolute ${
            quantity &&
            "py-2 flex justify-between items-center bg-orange-700  rounded-full"
          }`}
        >
          {getQuantity(id) === 0 ? (
            <button
              onClick={() => {
                addToCart(id);
              }}
              className="hover:brightness-90 flex px-6 gap-2 bg-white py-2 rounded-full border border-orange-700"
            >
              <img src="/product-list-with-cart/images/icon-add-to-cart.svg" alt="add to card" />
              <span className="whitespace-nowrap font-semibold text-gray-800">
                Add to Cart
              </span>
            </button>
          ) : (
            <>
              <button
                className="hover:brightness-90 ml-2 border size-5 border-white rounded-full px-1"
                onClick={() => {
                  removeFromCart(id);
                }}
              >
                <img
                  src="/product-list-with-cart/images/icon-decrement-quantity.svg"
                  alt="decrement"
                />
              </button>
              <span className="text-white">{quantity}</span>
              <button
                className="hover:brightness-90 mr-2 border size-5 border-white rounded-full px-1"
                onClick={() => {
                  addToCart(id);
                }}
              >
                <img
                  src="/product-list-with-cart/images/icon-increment-quantity.svg"
                  alt="increment"
                />
              </button>
            </>
          )}
        </div>
      </div>
      <div className="font-semibold my-10">
        <p className="text-gray-400 font-thin">{category}</p>
        <h3 className="text-gray-800">{name}</h3>
        <p className="text-orange-500">${price.toFixed(2)}</p>
      </div>
    </section>
  );
}
