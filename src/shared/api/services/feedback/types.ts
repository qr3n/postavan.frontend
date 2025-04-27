export interface LeaveFeedbackRequest {
    order_id: string,
    stars: number,
    comment?: string
}

export interface IGetFeedbackResponse {
    stars: number,
    comment?: string
}