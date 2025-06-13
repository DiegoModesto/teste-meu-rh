import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmpresaService } from '../../core/services/empresa.service';

@Component({
      selector: 'app-dashboard',
      standalone: true,
      templateUrl: './dashboard.component.html',
      styleUrls: ['./dashboard.component.scss'],
      imports: []
})
export class DashboardComponent {
      empresa: any;
      empresaForm: FormGroup;

      constructor(private empresaService: EmpresaService, private fb: FormBuilder) {
            this.empresa = this.empresaService.getEmpresa();

            // Cria o formulário com os campos da empresa
            this.empresaForm = this.fb.group({
                  nome: [this.empresa?.nome || ''],
                  cnpj: [this.empresa?.cnpj || ''],
                  adminNome: [this.empresa?.adminNome || ''],
                  adminCpf: [this.empresa?.adminCpf || ''],
                  adminEmail: [this.empresa?.adminEmail || ''],
                  celular: [this.empresa?.celular || ''],
                  cep: [this.empresa?.cep || ''],
                  endereco: [this.empresa?.endereco || ''],
                  bairro: [this.empresa?.bairro || ''],
                  estado: [this.empresa?.estado || ''],
                  cidade: [this.empresa?.cidade || ''],
                  complemento: [this.empresa?.complemento || '']
            });
      }
}