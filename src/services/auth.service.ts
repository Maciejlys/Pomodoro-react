import config from "../config.json";
import { httpClient } from "./https.service";

const { routes } = config.api;

export interface Credentials {
  userName: string;
  password: string;
}

export const authService = {
  login: async (userName: string, password: string): Promise<string> => {
    const res = await httpClient.post(routes.login, {
      userName,
      password,
    });
    const { token } = res.data;
    return token;
  },

  verify: async (token: string): Promise<void> => {
    httpClient.defaults.headers.common["token"] = token;
    await httpClient.post(routes.verify);
  },

  register: async (userName: string, password: string): Promise<void> => {
    const res = await httpClient.post(routes.register, {
      userName,
      password,
    });
  },
};
