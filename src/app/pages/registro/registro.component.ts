import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
      selector: 'app-registro',
      standalone: true,
      imports: [ReactiveFormsModule],
      templateUrl: './registro.component.html',
      styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
      form: FormGroup;

      constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
            this.form = this.fb.group(
                  {
                        nome: ['Diego', Validators.required],
                        email: ['teste@teste.com', [Validators.required, Validators.email]],
                        senha: ['@123mudar', [Validators.required, Validators.minLength(6)]],
                        repetirSenha: ['@123mudar', Validators.required],
                        aceite: [false, Validators.requiredTrue]
                  },
                  { validators: this.senhasIguais }
            );
      }

      senhasIguais(group: FormGroup) {
            const senha = group.get('senha')?.value;
            const repetirSenha = group.get('repetirSenha')?.value;
            return senha === repetirSenha ? null : { senhasDiferentes: true };
      }

      registrar() {
            if (this.form.valid) {
                  const { nome, email, senha } = this.form.value;
                  this.auth.registrar({ nome, email, senha });
                  this.router.navigate(['/boas-vindas']);
            }
      }
}