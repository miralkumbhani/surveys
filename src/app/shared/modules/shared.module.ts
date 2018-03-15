import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastyModule } from 'ng2-toasty';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ToastyModule.forRoot()
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ToastyModule
    ]
})
export class SharedModule { }