import { Component } from '@angular/core'
import { Router } from '@angular/router';

@Component({
    selector: 'footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.css']
})
export class FooterComponent {


    constructor(private router: Router){

    }

    goToCookiePolicy(){
        this.router.navigate(['cookie-policy'])
    }
}