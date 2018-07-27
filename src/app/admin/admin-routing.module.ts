import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminTicketsComponent } from './admin-tickets/admin-tickets.component';

const adminRoutes:Routes = [
    {
        path :'dashboard',
        component: DashboardComponent,
        children : [
            {path : '', redirectTo : 'admin-tickets',pathMatch:'full'},
            {path : 'admin-tickets',component:AdminTicketsComponent}
        ]
    }
];

@NgModule({
    imports : [
        RouterModule.forChild(adminRoutes)
    ],
    exports : [
        RouterModule
    ]
})

export class AdminRoutingModule{

}