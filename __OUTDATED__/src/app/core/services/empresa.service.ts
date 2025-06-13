import { Injectable } from '@angular/core';
import { Empresa } from '../../models/empresa.model';

@Injectable({ providedIn: 'root' })
export class EmpresaService {
  private empresa: Empresa | null = null;

  salvarEmpresa(empresa: Empresa) {
    this.empresa = empresa;
  }

  getEmpresa(): Empresa | null {
    return this.empresa;
  }
}