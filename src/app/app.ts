import { Component } from '@angular/core';
import { TablaProductosComponent } from './components/tabla-productos/tabla-productos';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TablaProductosComponent, DashboardLayoutComponent],
  template: `
    <h1>Taller 4 - victorerazo</h1>

    <!-- Primera parte: tabla de productos -->
    <app-tabla-productos></app-tabla-productos>

    <!-- Segunda parte: dashboard -->
    <app-dashboard-layout></app-dashboard-layout>
  `,
  styleUrls: ['./app.scss']
})
export class AppComponent {}