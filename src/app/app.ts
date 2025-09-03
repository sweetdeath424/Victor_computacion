import { Component } from '@angular/core';
import { TablaProductosComponent } from './components/tabla-productos/tabla-productos';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TablaProductosComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {}
