import { Component } from '@angular/core';
import { EmpresaService } from '../../core/services/empresa.service';

@Component({
      selector: 'app-dashboard',
      standalone: true,
      templateUrl: './dashboard.component.html',
      styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
      empresa: any;

      constructor(private empresaService: EmpresaService) {
            this.empresa = this.empresaService.getEmpresa();
      }
}