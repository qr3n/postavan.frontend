export interface LeaveFeedbackRequest {
    order_id: string,
    stars: number,
    comment?: string
}