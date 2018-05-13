import { Component, OnInit } from '@angular/core'
import { GDPRService } from '../../common/gdpr.service';

@Component({
    selector:'modify-profile',
    templateUrl: 'modify.component.html',
    styleUrls: ['modify.component.css']
})
export class ModifyComponent implements OnInit {

    firstName = ''
    lastName = ''
    email = ''
    adresa = ''
    telefon = ''

    constructor(private gdprService: GDPRService){
    
    }

    ngOnInit(){
        this.firstName = this.gdprService.user.prenume
        this.lastName = this.gdprService.user.nume
        this.email = this.gdprService.user.email
        this.telefon = this.gdprService.user.telefon
        this.adresa = this.gdprService.user.adresa
    }

    submitChanges(){
        this.gdprService.user.prenume = this.firstName
        this.gdprService.user.nume = this.lastName
        this.gdprService.user.email = this.email
        this.gdprService.user.telefon = this.telefon
        this.gdprService.user.adresa = this.adresa
    }
}