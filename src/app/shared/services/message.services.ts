import { Injectable } from '@angular/core';
import { Constants } from './constants';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
@Injectable()
export class MessageService {
  public toastOptions:ToastOptions;
  constructor(private toastyService:ToastyService, private toastyConfig: ToastyConfig) {
    this.toastyConfig.theme = 'material';
  }
  getErrorMessage(error){
    let errorMessage;
    switch(error) {
      case Constants.INVALID_LOGIN_CODE:
        errorMessage = Constants.INVALID_LOGIN_MESSAGE;
        break;
    }
    this.toastOptions = {
                        title: errorMessage,
                        msg:'' ,
                        showClose: true,
                        timeout: 2000,
                        theme: 'bootstrap'
                    };
                    this.toastyService.clearAll();
                    this.toastyService.error(this.toastOptions);
  }
  showSuccessMessage(response){
    let successMessage;
    switch(response) {

    }
    this.toastOptions = {
                        title: successMessage,
                        msg:'' ,
                        showClose: true,
                        timeout: 2000,
                        theme: 'bootstrap'
                    };
                    this.toastyService.clearAll();
                    this.toastyService.success(this.toastOptions);
  }
}