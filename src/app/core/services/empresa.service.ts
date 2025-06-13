import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EmpresaService {
      private empresa: any = null;

      salvarEmpresa(empresa: any) {
            this.empresa = empresa;
            localStorage.setItem('empresa', JSON.stringify(empresa));
      }

      getEmpresa() {
            return this.empresa || JSON.parse(localStorage.getItem('empresa') || '{}');
      }
}