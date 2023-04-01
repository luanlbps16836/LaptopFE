import axios from "axios";

const URL = 'http://localhost:5000';

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = token;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
}

export const fetchProducts = () => axios.get(`${URL}/api/products/`);
export const fetchCategories = () => axios.get(`${URL}/api/categories/`);
export const postLogin = (payload) => axios.post(`${URL}/api/auth/login`, payload);
export const postLogout = (payload) => axios.post(`${URL}/api/auth/logout`, payload);