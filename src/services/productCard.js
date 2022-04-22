export const getProducts = async () => {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();
    return products;
  } catch {
    throw new Error('There was an error getting the products');
  }
};

export const getSingleProduct = async (id) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await res.json();
    return product;
  } catch {
    throw new Error('Ther was an error getting this product');
  }
};
