import { Component } from '@angular/core'
import { GDPRService } from '../common/gdpr.service';
import { Router } from '@angular/router';


@Component({
    selector: 'cookie-popup',
    templateUrl: 'cookie.component.html',
    styleUrls: ['cookie.component.css']
})
export class CookieComponent {


    constructor(private gdprService: GDPRService,
                private router: Router){
        
    }

    agreeCookies(){
        this.gdprService.agreeCookies = true;
        this.gdprService.displayCookiesPopup = false;
    }

    denyCookies(){
        this.gdprService.agreeCookies = false;
        this.gdprService.displayCookiesPopup = false;
    }

    goToCookiePolicy(){
        this.router.navigate(['cookie-policy'])
    }
}