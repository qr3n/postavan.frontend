interface ChangeProfileInfoRequest {
    name: string,
    surname: string,
    patronymic: string,
    phone: string,
}

interface GetProfileResponse {
    id: string,
    name: string,
    surname: string,
    patronymic: string,
    phone: string,
}