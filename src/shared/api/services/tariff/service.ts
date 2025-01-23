import { adminApi } from "@shared/api";
import { withAxiosData } from "@shared/api/utils";

class TariffService {
    async getTariff() {
        return withAxiosData(await adminApi.get<GetTariffResponse>('/tariff'))
    }

    async updateTariff(data: UpdateTariffRequest) {
        return await adminApi.put('/tariff', data)
    }
}

export const tariffService = new TariffService()
