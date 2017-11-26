import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ProductModule } from './product/product.module';
import { AppComponent } from './app.component';
import { HeadnavbarComponent } from './headnavbar/headnavbar.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { CanActivateAuthGuard } from './can-activate.service';
import { UserProfileService } from './login/user-profile.service';
import './rxjs-extension';

@NgModule({
  declarations: [
    AppComponent,
    HeadnavbarComponent,
    HomeComponent,
    ProductComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { 
        path:'',component:HomeComponent
      },
      { 
        path:'product',
        component:ProductComponent,
        canActivate: [CanActivateAuthGuard],
        loadChildren: 'app/product/product.module#ProductModule'
      },
      { 
        path:'about',component:AboutComponent
      },
      { 
        path:'login',component:LoginComponent
      }
    ]),
    ProductModule
  ],
  providers: [
    CanActivateAuthGuard,
    UserProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
