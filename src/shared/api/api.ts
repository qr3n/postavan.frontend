import axios from 'axios'
import { DEV_URL } from "@shared/api/config";

export const api = axios.create({
    baseURL: DEV_URL
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
