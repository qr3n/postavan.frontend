import {
    CalculateOrderCostRequest,
    CalculateOrderCostResponse, ChangeOrderActiveRequest, ChangeOrderStatusRequest,
    CreateOrderRequest, GetUserOrderResponse
} from "./types";
import { adminApi, api } from "@shared/api";
import { withAxiosData } from "@shared/api/utils";

class OrderService {
    async calculateCost(data: CalculateOrderCostRequest): Promise<CalculateOrderCostResponse> {
        return withAxiosData(await api.post<string>('/orders/cost', data))
    }

    async create(data: CreateOrderRequest) {
        return withAxiosData(await api.post('/orders', data))
    }

    async get() {
        return withAxiosData(await api.get<GetUserOrderResponse[]>('/orders'))
    }
}

class AdminOrderService {
    async getAll() {
        return withAxiosData(await adminApi.get<GetUserOrderResponse[]>('/orders'))
    }

    async closeOrder(data: ChangeOrderActiveRequest) {
        return await adminApi.post('/orders/close', data)
    }

    async openOrder(data: ChangeOrderActiveRequest) {
        return await adminApi.post('/orders/open', data)
    }

    async changeStatus(data: ChangeOrderStatusRequest) {
        return await adminApi.put('/orders/status', data)
    }
}

export const orderService = new OrderService()
export const adminOrderService = new AdminOrderService()