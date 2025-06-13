import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private usuario: Usuario | null = null;

  registrar(usuario: Usuario) {
    this.usuario = usuario;
    localStorage.setItem('token', 'mock-token');
  }

  getUsuario(): Usuario | null {
    return this.usuario;
  }
}