import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpresaService } from '../../core/services/empresa.service';

@Component({
      selector: 'app-cadastro-empresa',
      templateUrl: './cadastro-empresa.component.html',
      styleUrls: ['./cadastro-empresa.component.scss']
})
export class CadastroEmpresaComponent {
      form: FormGroup;

      constructor(
            private fb: FormBuilder,
            private empresaService: EmpresaService,
            private router: Router
      ) {
            this.form = this.fb.group({
                  nome: ['', Validators.required],
                  cnpj: ['', Validators.required],
                  cidade: ['', Validators.required],
                  estado: ['', Validators.required]
            });
      }

      cancelar() {
            this.router.navigate(['/registro']);
      }

      salvar() {
            if (this.form.valid) {
                  this.empresaService.salvarEmpresa(this.form.value);
                  this.router.navigate(['/dashboard']);
            }
      }
}