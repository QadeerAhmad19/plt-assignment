import http from "../http-common";
const BASE_URL = "/products";

const getAll = () => {
    return http.get(`${BASE_URL}/products`);
};

const productService = {
    getAll
};
  
export default productService;