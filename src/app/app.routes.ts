import { Routes } from '@angular/router';

import { SearchUserComponent } from './modules/search-user/search-user';
import { UserDetailsComponent } from './modules/user-details/user-details';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'search/user', pathMatch: "full" },
  { path: 'search/user', component: SearchUserComponent },
  { path: 'user/list', component: UserDetailsComponent },
  { path: '**', component: SearchUserComponent }
];