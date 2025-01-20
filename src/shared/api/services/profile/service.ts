import { api } from "@shared/api";
import { withAxiosData } from "@shared/api/utils";

class ProfileService {
    async changeProfile(data: ChangeProfileInfoRequest) {
        return await api.put('/profile', data)
    }

    async getProfile() {
        return withAxiosData(await api.get<GetProfileResponse>('/profile'))
    }
}

export const profileService = new ProfileService()
