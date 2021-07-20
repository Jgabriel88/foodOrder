import CartContext from './cart-contex';

const CarProvider = (props) => {
	const addItemToCartHandler = (item) => {};
	const removeItemFromCartHandler = (id) => {};
	const CartContext = {
		items: [],
		totalAmount: 0,
		addItem: addItemToCartHandler,
		removeITem: removeItemFromCartHandler,
	};
	return (
		<CartContext.Provider value={CartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
