
const Cart = () => {
  return (
    <div className="cart-container max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Cart</h2>
      {/* Add cart items and functionality here */}
      <p className="text-gray-600">No items in the cart yet.</p>
      {/* Example button */}
      <button className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">
        Continue Shopping
      </button>
    </div>
  );
};

export default Cart;
