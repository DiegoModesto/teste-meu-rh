import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
      private user: any = null;
      private token: string | null = null;

      registrar(user: { nome: string; email: string; senha: string }) {
            this.user = user;
            this.token = 'mock-token';
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', this.token);
      }

      getUser() {
            return this.user || JSON.parse(localStorage.getItem('user') || '{}');
      }

      getToken() {
            return this.token || localStorage.getItem('token');
      }

      logout() {
            this.user = null;
            this.token = null;
            localStorage.removeItem('user');
            localStorage.removeItem('token');
      }
}