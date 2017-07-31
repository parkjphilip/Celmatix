export const createProducts = (file) => {
  return $.ajax({
    method: 'post',
    url: '/api/products',
    processData: false,
    contentType: false,
    data: file
  });
};