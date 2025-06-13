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
      email = '';

      constructor(private auth: AuthService, private router: Router) {
            const user = this.auth.getUser();
            this.nome = user?.nome || '';
            this.email = user?.email || '';
      }

      iniciarConfiguracao() {
            this.router.navigate(['/empresa']);
      }
}