import { Component } from '@angular/core'
import { GDPRService } from '../../common/gdpr.service';

@Component({
    selector: 'privacy-view',
    templateUrl: 'privacy.component.html',
    styleUrls: ['privacy.component.css']
})
export class PrivacyComponent {

    color="warn"

    constructor(private gdprService: GDPRService){

    }
    onTogglePartialData(){
        if(this.gdprService.partialDataSelected){
            this.gdprService.partialDataSelected = false
        } else {
            this.gdprService.partialDataSelected = true;
        }
    }
    onToggleMarketing(){
        if(this.gdprService.marketingSelected){
            this.gdprService.marketingSelected = false;
        } else {
            this.gdprService.marketingSelected = true;
        }
    }
    onToggleAutocomplete(){
        if(this.gdprService.profilingAutocompleteSelected){
            this.gdprService.profilingAutocompleteSelected = false;
        } else {
            this.gdprService.profilingAutocompleteSelected = true;
        }
    }
    onToggleSuggestion(){
        if(this.gdprService.profilingSuggestionSelected){
            this.gdprService.profilingSuggestionSelected = false;
        } else {
            this.gdprService.profilingSuggestionSelected = true;
        }
    }
    onToggleThirdParty(){
        if(this.gdprService.profilingThirdPartySelected){
            this.gdprService.profilingThirdPartySelected = false;
        } else {
            this.gdprService.profilingThirdPartySelected = true;
        }
    }

    requestCopy(){
        alert("You have requested a copy of the data that we store about you. You will receive an email in maximul 30 days with the information that you have requested. Best regards!")
    }
    checkProcessing(){
        alert("You have enabled the profiling functionalities. You personal information is beeing processed.")
    }
}