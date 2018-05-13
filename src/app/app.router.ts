import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { CookiePolicyComponent } from './cookie-policy/cookiepolicy.component';
import { ProfileComponent } from './profile/profile.component';

const APP_ROUTES: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'home'
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'profile', component: ProfileComponent
    },
    {
        path: 'cookie-policy', component: CookiePolicyComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRouterModule {

}