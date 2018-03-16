import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/modules/shared.module';
import { CommonModule } from '@angular/common';
@NgModule({
    imports: [
        DashboardRoutingModule,
        SharedModule,
        CommonModule
    ],
    declarations: [
        DashboardComponent
    ]
})
export class DashboardModule { }