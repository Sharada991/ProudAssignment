import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProposalComponent } from './components/proposal/proposal.component';
import { ProposalsListComponent } from './components/proposals-list/proposals-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  { path: 'app-proposal', component: ProposalComponent},
  { path: 'app-proposal/:id', component: ProposalComponent},
  { path: 'app-proposals-list', component: ProposalsListComponent},
  { path: 'app-user-details', component: UserDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
