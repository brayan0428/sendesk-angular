import {ModuleWithProviders} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';

const appRoutes:Routes = [
    {path : '',component : LoginComponent},
    {path : '**',component : LoginComponent}
]

export const appRoutingProviders:any[] = [];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);