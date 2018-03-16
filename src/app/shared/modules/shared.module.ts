import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastyModule } from 'ng2-toasty';
import { MatSelectModule } from '@angular/material/select';
import { NoConflictStyleCompatibilityMode } from '@angular/material';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ToastyModule.forRoot(),
        NoConflictStyleCompatibilityMode,
        MatSelectModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ToastyModule,
        NoConflictStyleCompatibilityMode,
        MatSelectModule
    ]
})
export class SharedModule { }