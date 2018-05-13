import { Injectable } from '@angular/core'

@Injectable()
export class GDPRService {

    agreeCookies: boolean = false;
    displayCookiesPopup: boolean = true;
    contactAccept: boolean = false;

    displayLoginModal: boolean = false;

    dataProcessingClicked: boolean = true;
    modifyProfileClicked: boolean = false;
    deleteAccountClicked: boolean = false;

    partialDataSelected:boolean = false;
    marketingSelected:boolean = false;
    profilingAutocompleteSelected: boolean = false;
    profilingSuggestionSelected: boolean = false;
    profilingThirdPartySelected: boolean = false;
    

    registerSelected:boolean = false;
    userLoggedIn: boolean = false;
    
    user = {
        nume: '',
        prenume: '',
        telefon: '',
        adresa: '',
        email: '',
        parola: ''
    }

    constructor(){

    }
}