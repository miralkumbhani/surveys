import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
    constructor(public router: Router) {}

    ngOnInit() {
       if (this.router.url === '/') {
            var token = localStorage.getItem('authtoken');
            if(token != null) {
                this.router.navigate(['/dashboard']);
            }
            else {
                this.router.navigate(['/login']);
            }
        }
    }
}