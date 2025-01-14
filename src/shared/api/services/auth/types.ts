export interface SendCodeRequest {
    email?: string,
    phone?: string,
}

export interface LoginRequest {
    email?: string,
    phone?: string,
    code?: string,
}