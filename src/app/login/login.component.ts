import { Component, OnInit } from '@angular/core'
import { GDPRService } from '../common/gdpr.service';

@Component({
    selector: 'login-view',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent{
    
    confirmText = "Login"
    color="warn"
    firstName = ''
    lastName = ''
    email = ''
    telefon = ''
    adresa
    password = ''
    confirmPassword = ''

    constructor(private gdprService: GDPRService){

    }

    onToggleLogin(){
        if(this.gdprService.registerSelected){
            this.gdprService.registerSelected = false;
            this.confirmText = "Login"
        } else {
            this.gdprService.registerSelected = true;
            this.confirmText = "Register"
        }
    }
    cancelLogin(){
        this.gdprService.registerSelected = false;
        this.gdprService.displayLoginModal = false;
    }

    confirmProcedure(){
        if(this.gdprService.registerSelected){
            this.gdprService.user.prenume = this.firstName
            this.gdprService.user.nume = this.lastName
            this.gdprService.user.email = this.email
            this.gdprService.user.telefon = this.telefon
            this.gdprService.user.adresa = this.adresa
            this.gdprService.user.parola = this.password
            this.clear();
            this.gdprService.registerSelected = false;
            this.confirmText = "Login";
        } else {
            if(this.email === this.gdprService.user.email && this.password === this.gdprService.user.parola){
                this.gdprService.userLoggedIn = true;
                this.gdprService.displayLoginModal = false;
            }
        }
    }

    clear(){
        this.firstName = ''
        this.lastName = ''
        this.email = ''
        this.telefon = ''
        this.adresa = ''
        this.password = ''
        this.confirmPassword = ''
    }
}