import { Component } from '@angular/core'
import { Router } from '@angular/router';
import { GDPRService } from '../common/gdpr.service';

@Component({
    selector: 'navigation-view',
    templateUrl: 'navigation.component.html',
    styleUrls: ['navigation.component.css']
})
export class NavigationComponent {

    constructor(private router: Router,
                private gdprService: GDPRService){

    }

    goToProfile(){
        this.router.navigate(['profile'])
    }

    displayLoginDialog(){
        this.gdprService.displayLoginModal = true;
    }
}