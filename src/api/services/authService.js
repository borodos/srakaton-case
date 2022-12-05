import { apiClient } from "../client";

class AuthService {
  login(login, password) {
    return apiClient.post("http://192.168.43.41:5000/api/auth/login", {
      email: login.trim(),
      password: password,
    });
  }
  check() {
    return apiClient.get("http://192.168.43.41:5000/health");
  }
}

export const authService = new AuthService();
