import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CookieComponent } from './cookie-popup/cookie.component';
import { AppRouterModule } from './app.router';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component'
import { ProductsComponent } from './products/products.component';
import { GDPRService } from './common/gdpr.service';
import { FooterComponent } from './footer/footer.component'
import { NewsletterComponent } from './newsletter/newsletter.component';
import { CookiePolicyComponent } from './cookie-policy/cookiepolicy.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ProfileComponent } from './profile/profile.component';
import { ProfileModule } from './profile/profile.module';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './login/login.component'
import { FormsModule } from '@angular/forms'
import {MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    NewsletterComponent,
    CookieComponent,
    ProductsComponent,
    CookiePolicyComponent,
    LoginComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRouterModule,
    ProfileModule,
    MatInputModule,
    MatSlideToggleModule,
    FormsModule,
    MatCheckboxModule
  ],
  providers: [GDPRService],
  bootstrap: [AppComponent]
})
export class AppModule { }
