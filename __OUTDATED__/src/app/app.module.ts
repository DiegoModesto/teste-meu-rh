import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistroComponent } from './pages/registro/registro.component';
import { BoasVindasComponent } from './pages/boas-vindas/boas-vindas.component';
import { CadastroEmpresaComponent } from './pages/cadastro-empresa/cadastro-empresa.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
      declarations: [
            // Remova componentes standalone daqui
      ],
      imports: [
            BrowserModule,
            ReactiveFormsModule,
            AppRoutingModule,
            AppComponent, // Standalone
            RegistroComponent, // Standalone
            BoasVindasComponent, // Standalone
            CadastroEmpresaComponent, // Standalone
            DashboardComponent // Standalone
      ],
      providers: [],
      bootstrap: [AppComponent]
})
export class AppModule { }