import { CalculateOrderCostRequest, CalculateOrderCostResponse } from "./types";
import { api } from "@shared/api";
import { withAxiosData } from "@shared/api/utils";

class OrderService {
    async calculateCost(data: CalculateOrderCostRequest): Promise<CalculateOrderCostResponse> {
        return withAxiosData(await api.post('/orders/cost', data))
    }
}

export const orderService = new OrderService()