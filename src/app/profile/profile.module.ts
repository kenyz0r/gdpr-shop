import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProfileComponent } from './profile.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ProfileNavComponent } from './profile-navigation/profilenav.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ModifyComponent } from './modify-profile/modify.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms'
import { DeleteComponent } from './delete-account/delete.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
    declarations: [
        ProfileComponent,
        ProfileNavComponent,
        PrivacyComponent,
        ModifyComponent,
        DeleteComponent
    ],
    imports: [MatSlideToggleModule, CommonModule, MatInputModule, FormsModule, MatCheckboxModule],
    exports: [],
    providers: []
})
export class ProfileModule {

}