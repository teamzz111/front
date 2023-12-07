import request from "../api";
import api from "../api";
import API_ENDPOINTS from "../endpoints";
import {
  InternalRequestUpdateUser,
  LoginRequestType,
  LoginResponseType,
  UpdateUserRequest,
} from "./models";

export default class UserService {
  public static async logIn(
    data: LoginRequestType
  ): Promise<LoginResponseType> {
    return request({
      url: API_ENDPOINTS.USER.LOGIN,
      data,
      method: "POST",
    });
  }

  public static async deleteUser(id: string) {
    return request({
      url: API_ENDPOINTS.USER.DELETE.replace("{id}", id),
      method: "DELETE",
    });
  }

  public static async getAll() {
    return request({
      url: API_ENDPOINTS.USER.GET_ALL,
    });
  }

  public static async updateUser({ data, id }: InternalRequestUpdateUser) {
    return request({
      url: API_ENDPOINTS.USER.UPDATE.replace("{id}", id),
      method: "PUT",
      data,
    });
  }
}
