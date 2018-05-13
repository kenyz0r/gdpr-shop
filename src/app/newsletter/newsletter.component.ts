import { Component } from '@angular/core'
import { GDPRService } from '../common/gdpr.service';

@Component({
    selector: 'newsletter-view',
    templateUrl: 'newsletter.component.html',
    styleUrls: ['newsletter.component.css']
})
export class NewsletterComponent {

    constructor(private gdprService : GDPRService){

    }

    agreeContact(index){
        let buttons = document.getElementsByTagName('button')
        buttons[index].disabled = true;
        buttons[2].disabled = false;
        this.gdprService.contactAccept = true;
    }

    denyContact(){
        let buttons = document.getElementsByTagName('button')
        buttons[0].disabled = false;
        buttons[1].disabled = false;
        buttons[2].disabled = true;
        this.gdprService.contactAccept = false;
    }

    selectContactWay(index){
        let buttons = document.getElementsByTagName('button')
        buttons[3].disabled = false;
        buttons[4].disabled = false;
        buttons[5].disabled = false;
        buttons[index].disabled = true;
    }
}