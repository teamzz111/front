export interface LoginRequestType {
  email: string;
  password: string;
}

export interface LoginResponseType {
  id: string;
  name: string;
  email: string;
  access_token: string;
}

export interface UserListResponse {
  _id: string;
  name: string;
  email: string;
  purchases: number;
  role: string;
}

export interface UpdateUserRequest {
  name?: string;
  email?: string;
  purchases?: number;
}

export interface InternalRequestUpdateUser {
  data: UpdateUserRequest;
  id: string;
}
