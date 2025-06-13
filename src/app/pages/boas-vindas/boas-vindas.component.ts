import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
      selector: 'app-boas-vindas',
      standalone: true,
      templateUrl: './boas-vindas.component.html',
      styleUrls: ['./boas-vindas.component.scss']
})
export class BoasVindasComponent {
      nome = '';

      constructor(private auth: AuthService, private router: Router) {
            this.nome = this.auth.getUser()?.nome || '';
      }

      iniciarConfiguracao() {
            this.router.navigate(['/empresa']);
      }
}