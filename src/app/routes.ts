import { DashboardComponent } from "./dashboard/dashboard.component";
import { Routes } from "@angular/router";
import { CustomerListResolver } from "./shared/services/customer-list-resolver.service";

export const appRoutes : Routes = [
    { path: 'dashboard', component: DashboardComponent, resolve: { customers: CustomerListResolver} },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
]