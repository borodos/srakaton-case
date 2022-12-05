class StorageService {
  login() {
    localStorage.setItem("auth", true);
  }
  logout() {
    localStorage.removeItem("auth");
  }
}

export const storageService = new StorageService()