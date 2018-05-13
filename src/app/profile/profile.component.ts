import { Component } from '@angular/core'
import { GDPRService } from '../common/gdpr.service';

@Component({
    selector: 'profile-view',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css']
})
export class ProfileComponent {

    constructor(private gdprService: GDPRService){

    }
    
}