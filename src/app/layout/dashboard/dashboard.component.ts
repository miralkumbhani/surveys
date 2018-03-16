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
    public user: User;
    public categories: string[] = [];
    public listOfSelectedConfig = [];

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
        let key = localStorage.getItem('userName');
        let storedData = JSON.parse(localStorage.getItem(key));
        this.listOfSelectedConfig = storedData;
    }

    saveConfigurationDetails() {
        this.selelectedConfigurations = this.detailsForm.value;
        if(this.detailsForm.valid) {
            this.listOfSelectedConfig.push(this.selelectedConfigurations);
            this.saveDataInStore();
        }
    }

    resetConfigurationDetails() {
        this.detailsForm.reset();
    }

    saveDataInStore() {
        let user = localStorage.getItem('userName');
        let data = JSON.stringify(this.listOfSelectedConfig);
        localStorage.setItem(user, data);
    }
}