import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AdminRoutingModule} from './admin-routing.module'

//Componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminTicketsComponent } from './admin-tickets/admin-tickets.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';

@NgModule({
    declarations: [
        DashboardComponent,
        AdminTicketsComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        HttpModule,
        AdminRoutingModule 
    ],
    exports: [],
    providers: [],
})
export class AdminModule {}