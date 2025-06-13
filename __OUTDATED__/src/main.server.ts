import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ApplicationConfig } from '@angular/core';

export const config: ApplicationConfig = {};

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
