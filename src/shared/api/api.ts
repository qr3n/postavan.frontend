import axios from 'axios'
import { DEV_URL } from "@shared/api/config";

export const api = axios.create({
    baseURL: DEV_URL
})