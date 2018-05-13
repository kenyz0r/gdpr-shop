import { Component } from '@angular/core'
import { GDPRService } from '../../common/gdpr.service';
import { Router } from '@angular/router';

@Component({
    selector: 'profile-nav',
    templateUrl: 'profilenav.component.html',
    styleUrls: ['profilenav.component.css']
})
export class ProfileNavComponent {


    constructor(private gdprService: GDPRService,
                private router: Router){

    }


    goToHome(){
        this.router.navigate(['home'])
    }

    displayDataProcessing(){
        this.gdprService.modifyProfileClicked = false;
        this.gdprService.deleteAccountClicked = false;
        this.gdprService.dataProcessingClicked = true;
    }
    displayModifyProfile(){
        this.gdprService.dataProcessingClicked = false;
        this.gdprService.deleteAccountClicked = false;
        this.gdprService.modifyProfileClicked = true;
    }
    displayDeleteAccount(){
        this.gdprService.modifyProfileClicked = false;
        this.gdprService.dataProcessingClicked = false;
        this.gdprService.deleteAccountClicked = true;
    }

    logoutUser(){
        this.gdprService.modifyProfileClicked = false;
        this.gdprService.dataProcessingClicked = false;
        this.gdprService.deleteAccountClicked = false;
        this.gdprService.userLoggedIn = false;
        this.router.navigate(['home'])
    }
}