export const createProduct = (file) => {
  return $.ajax({
    method: 'post',
    url: '/api/products',
    data: file
  });
};