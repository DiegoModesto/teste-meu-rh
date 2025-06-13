import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
      selector: 'app-registro',
      templateUrl: './registro.component.html',
      styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
      form: FormGroup;

      constructor(
            private fb: FormBuilder,
            private authService: AuthService,
            private router: Router
      ) {
            this.form = this.fb.group({
                  nome: ['', Validators.required],
                  email: ['', [Validators.required, Validators.email]],
                  senha: ['', [Validators.required, Validators.minLength(6)]],
                  repetirSenha: ['', Validators.required]
            }, { validators: this.senhasIguais });
      }

      senhasIguais(form: FormGroup) {
            return form.get('senha')?.value === form.get('repetirSenha')?.value
                  ? null : { senhaDiferente: true };
      }

      registrar() {
            if (this.form.valid) {
                  const { nome, email, senha } = this.form.value;
                  this.authService.registrar({ nome, email, senha });
                  this.router.navigate(['/boas-vindas']);
            }
      }
}