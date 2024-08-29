import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './banderas/components/sidebar/sidebar.component';
import { SearcherComponent } from './banderas/components/searcher/searcher.component';
import { ListComponent } from './banderas/components/list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    SearcherComponent, 
    ListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-buscador-paises';
}
