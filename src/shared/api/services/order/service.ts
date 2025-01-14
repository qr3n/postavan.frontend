import {
    CalculateOrderCostRequest,
    CalculateOrderCostResponse,
    CreateOrderRequest, GetUserOrderResponse
} from "./types";
import { api } from "@shared/api";
import { withAxiosData } from "@shared/api/utils";

class OrderService {
    async calculateCost(data: CalculateOrderCostRequest): Promise<CalculateOrderCostResponse> {
        return withAxiosData(await api.post('/orders/cost', data))
    }

    async create(data: CreateOrderRequest) {
        return withAxiosData(await api.post('/orders', data))
    }

    async get() {
        return withAxiosData(await api.get<GetUserOrderResponse[]>('/orders'))
    }
}

export const orderService = new OrderService()