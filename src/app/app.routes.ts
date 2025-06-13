import { Routes } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';
import { BoasVindasComponent } from './pages/boas-vindas/boas-vindas.component';
import { CadastroEmpresaComponent } from './pages/cadastro-empresa/cadastro-empresa.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
      { path: '', redirectTo: 'registro', pathMatch: 'full' },
      { path: 'registro', component: RegistroComponent },
      { path: 'boas-vindas', component: BoasVindasComponent },
      { path: 'empresa', component: CadastroEmpresaComponent },
      { path: 'dashboard', component: DashboardComponent }
];
