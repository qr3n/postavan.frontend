export interface CalculateOrderCostRequest {
    pickup_addresses: string[],
    delivery_addresses: string[],
    places_count: number,
    weight: number
}

export interface CalculateOrderCostResponse {
    cost: number
}