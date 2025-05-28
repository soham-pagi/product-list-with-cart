import Cart from "./components/Cart";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import OrderConfirmedModal from "./components/OrderConfirmedModal";

function App() {

  function showModal() {
    const orderConfirmationElement = document.getElementById('order-confirmation-dialog') as HTMLDialogElement;
    orderConfirmationElement.showModal();
  }

  return (
    <div className="min-w-100 mx-auto px-6 py-8 bg-yellow-50/50">
      <OrderConfirmedModal />
      <div className="block sm:flex sm:flex-row sm:gap-6">
        <section className="flex-3/5">
          <Header text="Desserts" />
          <ItemList className="mt-10 sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-1" />
        </section>
        <Cart
          className="sticky right-0 top-10"
          openModal={showModal}
        />
      </div>
    </div>
  );
}

export default App;
