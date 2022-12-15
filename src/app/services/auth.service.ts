import { Injectable } from '@angular/core';
import { Auth } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  #LOCAL_STORAGE_KEY = 'auth';
  #defaultAuth: Auth = {
    isLogged: false,
  };

  constructor() {}

  getAuth(): Auth {
    const storedAuth = localStorage.getItem(this.#LOCAL_STORAGE_KEY);
    if (storedAuth) {
      return JSON.parse(storedAuth) as Auth;
    }

    localStorage.setItem(
      this.#LOCAL_STORAGE_KEY,
      JSON.stringify(this.#defaultAuth)
    );
    return this.#defaultAuth;
  }

  login(): Auth {
    const auth = this.getAuth();
    auth.isLogged = true;
    this.setAuth(auth);

    return auth;
  }

  logout(): Auth {
    const auth = this.getAuth();
    auth.isLogged = false;
    this.setAuth(auth);

    return auth;
  }

  private setAuth(auth: Auth): void {
    localStorage.setItem(this.#LOCAL_STORAGE_KEY, JSON.stringify(auth));
  }
}
