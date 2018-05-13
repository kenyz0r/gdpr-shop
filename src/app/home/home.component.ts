import { Component } from '@angular/core'
import { GDPRService } from '../common/gdpr.service';

@Component({
    selector: 'home-view',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class HomeComponent{ 


    constructor(private gdprService: GDPRService){
        
    }
}