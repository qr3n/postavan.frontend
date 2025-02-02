export interface ChangeProfileInfoRequest {
    name: string,
    surname: string,
    patronymic: string,
    phone: string,
}

export interface ChangeProfileInfoByAdminRequest {
    user_id: string,
    name: string,
    surname: string,
    patronymic: string,
    phone: string,
}

export interface GetProfileResponse {
    id: string,
    name: string,
    surname: string,
    patronymic: string,
    phone: string,
}