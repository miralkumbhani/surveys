import { Component, OnInit } from '@angular/core';
import { User } from '../../login/user';
import { Router, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, FormsModule, FormArray, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { MessageService } from '../../shared/services/message.services';
import { Constants } from '../../shared/services/constants';
import { Utils } from '../../shared/services/utils';
import { SelectedConfigurations } from './configurations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    public selelectedConfigurations: SelectedConfigurations;
    public categories: string[] = [];
    public isSaveConfigDetails: boolean = false;

    detailsForm: FormGroup;
    constructor(private fb: FormBuilder) {
        this.categories = ["System Configurations", "Website Configurations"];
        this.detailsForm = this.fb.group({
            'category' : [null,[Validators.required]],
            'config_url': [null,[Validators.required]],
            'username': [null,[Validators.required]],
            'password': [null,[Validators.required]],
            'notes': [null]
        });
        this.selelectedConfigurations = {category: '', config_url: '', username: '', password: '', notes: ''};
    }

    ngOnInit() {
        this.isSaveConfigDetails = false;
    }

    saveConfigurationDetails() {
        debugger;
        this.selelectedConfigurations = this.detailsForm.value;
        console.log("this.selelectedConfigurations", this.selelectedConfigurations);
        if(this.detailsForm.valid) {
            this.createCards();
        }
    }

    resetConfigurationDetails() {
        this.detailsForm.reset();
    }

    createCards() {
        this.isSaveConfigDetails = true;
    }

}