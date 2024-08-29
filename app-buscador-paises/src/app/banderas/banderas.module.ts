import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';cd 
import { SearcherComponent } from './components/searcher/searcher.component';
import { ListComponent } from './components/list/list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
    imports: [CommonModule],
    exports: [],
    declarations: [SidebarComponent,
        SearcherComponent,
        ListComponent

    ],
    providers: [],
})
export class NameModule { }
