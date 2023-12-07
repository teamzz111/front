import request from "../api";
import API_ENDPOINTS from "../endpoints";
import { RoutesResponse } from "./models";

export default class AnalyticsService {
  public static async registerVisit(url: string) {
    return request({
      url: API_ENDPOINTS.ANALYTICS.REGISTER_VISIT,
      data: { url },
      method: "POST",
    });
  }

  public static async getVisits() {
    return request<RoutesResponse[]>({
      url: API_ENDPOINTS.ANALYTICS.GET_ALL_ROUTES,
    });
  }
}
