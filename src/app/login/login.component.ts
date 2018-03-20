import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { ReactiveFormsModule, FormGroup, FormControl, FormsModule, FormArray, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { MessageService } from '../shared/services/message.services';
import { Constants } from '../shared/services/constants';
import { Utils } from '../shared/services/utils';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [MessageService]
})
export class LoginComponent implements OnInit {
    public user: User;
    public showLogin: boolean = false;
    loginForm: FormGroup;

    constructor(private router: Router, private fb: FormBuilder, private messageService: MessageService, private toastyService:ToastyService, private toastyConfig: ToastyConfig) {
        this.toastyConfig.theme = 'material';
        var isLoggedIn = localStorage.getItem('isLoggedIn');
        var isAuth = localStorage.getItem('authtoken');
        if(isLoggedIn == 'true') {
            this.router.navigate(['/dashboard']);
        } else {
            localStorage.removeItem('authtoken');
            localStorage.removeItem('isLoggedIn');
            this.showLogin = true;
        }
        this.loginForm = this.fb.group({
            'email' : [null, [Validators.required]],
            'password' : [null, [Validators.required]]
        });

    }

    ngOnInit() {
        this.user = {email:'', password:''};
    }

    onLoggedin() {
        var router = this.router;
        if (this.loginForm.valid) {
           this.user.email = this.loginForm.controls['email'].value;
           this.user.password = this.loginForm.controls['password'].value;
           this.executeAuthenticationService(router);
       }
       else {
           for (var i in this.loginForm.controls) {
               this.loginForm.controls[i].markAsTouched();
           }
        }
    }

    executeAuthenticationService(router) {
        let token = Utils.patternGeneratorForToken();
        if(this.user.email === 'admin' && this.user.password === 'admin') {
            localStorage.setItem('authtoken', token);
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userName', this.user.email);
            router.navigate(['/dashboard']);
        } else {
            // this.messageService.getErrorMessage(Constants.INVALID_LOGIN_CODE);
        }
    }
}