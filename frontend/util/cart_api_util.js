export const addToCart = (product, user) => {
  return $.ajax({
    method: 'patch',
    url: `/api/cart/${user.cart.id}`,
    data: {
      product: product,
      user: user
    }
  });
};