import { withAxiosData } from "@shared/api/utils";
import { adminApi } from "@shared/api";
import { GetUserResponse } from "@shared/api/services/users/types";
import { GetDriverResponse } from "@shared/api/services/drivers/types";

class DriverService {
    async getAll() {
        return withAxiosData(await adminApi.get<GetDriverResponse[]>('/drivers'))
    }
}

export const driverService = new DriverService()
