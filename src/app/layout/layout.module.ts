import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { SharedModule } from '../shared/modules/shared.module';

@NgModule({
    imports: [
        LayoutRoutingModule,
        CommonModule,
        SharedModule,
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent
    ]
})
export class LayoutModule { }