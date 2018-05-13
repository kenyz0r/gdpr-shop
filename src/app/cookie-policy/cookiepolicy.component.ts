import { Component } from '@angular/core'
import { Router } from '@angular/router';

@Component({
    selector:'cookie-policy',
    templateUrl: 'cookiepolicy.component.html',
    styleUrls: ['cookiepolicy.component.css']
})
export class CookiePolicyComponent {

    constructor(private router: Router){

    }

    goBackHome(){
        this.router.navigate(['home'])
    }
}