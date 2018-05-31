import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { UserService } from './services/UserService';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { SearchUserComponent } from './modules/search-user/search-user';
import { UserDetailsComponent } from './modules/user-details/user-details';
import { appRoutes } from './app.routes';
import { NguiAutoCompleteModule } from '@ngui/auto-complete'; 

@NgModule({
  declarations: [
    AppComponent,
    SearchUserComponent,
    UserDetailsComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    CoreModule,
    FormsModule,
    NguiAutoCompleteModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
