import axios from "axios";

const baseURL = 'https://api.escuelajs.co/api/v1/products';

export const getProducts = async () => {
    const response = await axios.get(baseURL);
    return response;
} 

export const getProductsById = async (productId:any) => {
    const response = await axios.get(`${baseURL}/${productId}`);
    return response;
    
} 

export const createProduct = async (product:any) => {
    const response = await axios.post(`${baseURL}`, product);
    return response;
} 

export const productDelete = async (productId:any) => {
      const response = await axios.delete(`${baseURL}/${productId}`);
      return response;
 
}

export const updateProduct = async (productId: string, product: any) => {
        const response = await axios.put(`${baseURL}/${productId}`, product);
        return response;
}




