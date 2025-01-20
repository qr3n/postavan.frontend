import axios from 'axios'
import { DEV_URL } from "@shared/api/config";
import { QueryClient } from "@tanstack/react-query";

export const api = axios.create({
    baseURL: DEV_URL
})

export const queryClient = new QueryClient()

export const adminApi = axios.create({
    baseURL: `${DEV_URL}/admin`
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

adminApi.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('adminAccessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
