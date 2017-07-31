export const createProducts = (file) => {
  return $.ajax({
    method: 'post',
    url: '/api/products',
    data: file
  });
};