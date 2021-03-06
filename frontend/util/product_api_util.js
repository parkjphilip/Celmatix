export const createProducts = (file) => {
  return $.ajax({
    method: 'post',
    url: '/api/products',
    processData: false,
    contentType: false,
    data: file
  });
};

export const fetchProducts = () => {
  return $.ajax({
    method: 'get',
    url: 'api/products'
  });
};

export const addProduct = (product) => {
  return $.ajax({
    method: 'post',
    url: 'api/products',
    data: product
  });
};