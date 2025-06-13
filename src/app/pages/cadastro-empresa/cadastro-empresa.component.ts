import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpresaService } from '../../core/services/empresa.service';

@Component({
      selector: 'app-cadastro-empresa',
      standalone: true,
      imports: [ReactiveFormsModule],
      templateUrl: './cadastro-empresa.component.html',
      styleUrls: ['./cadastro-empresa.component.scss']
})
export class CadastroEmpresaComponent {
      form: FormGroup;

      constructor(private fb: FormBuilder, private empresaService: EmpresaService, private router: Router) {
            this.form = this.fb.group({
                  tipo: ['', Validators.required],
                  nome: ['', Validators.required],
                  cnpj: ['', Validators.required],
                  cep: ['', Validators.required],
                  endereco: ['', Validators.required],
                  bairro: ['', Validators.required],
                  estado: ['', Validators.required],
                  cidade: ['', Validators.required],
                  complemento: [''],
                  celular: ['', Validators.required],
                  adminNome: ['', Validators.required],
                  adminCpf: ['', Validators.required],
                  adminEmail: ['', [Validators.required, Validators.email]]
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