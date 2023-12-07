import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL,
  isServer = typeof window === "undefined";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  if (isServer) {
    const { cookies } = await import("next/headers"),
      token = cookies().get("token")?.value;

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  } else {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  }

  return config;
});

const request = async function <T = any>(options: AxiosRequestConfig<any>) {
  const onSuccess = function (response: AxiosResponse<T>) {
    return response.data;
  };

  const onError = function (error: AxiosError) {
    console.log(error);
    return Promise.reject(error.response);
  };

  return api(options).then(onSuccess).catch(onError);
};

export default request;
