import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpresaService } from '../../core/services/empresa.service';
import { CommonModule } from '@angular/common';

@Component({
      selector: 'app-cadastro-empresa',
      standalone: true,
      imports: [CommonModule, ReactiveFormsModule],
      templateUrl: './cadastro-empresa.component.html',
      styleUrls: ['./cadastro-empresa.component.scss']
})
export class CadastroEmpresaComponent {
      form: FormGroup;

      constructor(private fb: FormBuilder, private empresaService: EmpresaService, private router: Router) {
            this.form = this.fb.group({
                  tipo: ['Tecnologia', Validators.required],
                  nome: ['Empresa Mockada Ltda', Validators.required],
                  cnpj: ['12.345.678/0001-99', Validators.required],
                  cep: ['01001-000', Validators.required],
                  endereco: ['Rua Exemplo', Validators.required],
                  bairro: ['Centro', Validators.required],
                  estado: ['SP', Validators.required],
                  cidade: ['São Paulo', Validators.required],
                  complemento: ['Sala 101'],
                  celular: ['(11) 91234-5678', Validators.required],
                  adminNome: ['João Mock', Validators.required],
                  adminCpf: ['123.456.789-00', Validators.required],
                  adminEmail: ['joao.mock@empresa.com', [Validators.required, Validators.email]]
            });
      }

      salvar() {
            if (this.form.valid) {
                  this.empresaService.salvarEmpresa(this.form.value);
                  this.router.navigate(['/dashboard']);
            }
      }

      cancelar() {
            this.router.navigate(['/registro']);
      }
}