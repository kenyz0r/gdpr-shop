import { Component } from '@angular/core'
import { GDPRService } from '../../common/gdpr.service';
import { Router } from '@angular/router';

@Component({
    selector:'delete-view',
    templateUrl: 'delete.component.html',
    styleUrls: ['delete.component.css']
})
export class DeleteComponent{


    color = "warn"
    parola = '';

    constructor(private gdprService: GDPRService,
                private router: Router){

    }

    deleteAccount(){
        this.gdprService.user.prenume = ''
        this.gdprService.user.nume = ''
        this.gdprService.user.email = ''
        this.gdprService.user.adresa = ''
        this.gdprService.user.telefon = ''
        this.gdprService.user.parola = ''
        this.gdprService.userLoggedIn = false;
        alert("Your account was successfully deleted.")
        this.router.navigate(['home'])
    }
}