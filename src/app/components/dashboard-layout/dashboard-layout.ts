import { Component } from '@angular/core';
import { TablaProductosComponent } from '../tabla-productos/tabla-productos';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [TablaProductosComponent],
  templateUrl: './dashboard-layout.html',
  styleUrls: ['./dashboard-layout.scss']
})
export class DashboardLayoutComponent {}
