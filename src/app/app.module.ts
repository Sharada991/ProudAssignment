import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProposalComponent } from './components/proposal/proposal.component';
import { ProposalsListComponent } from './components/proposals-list/proposals-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ProposalService } from './services/proposal.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProposalComponent,
    ProposalsListComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ProposalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
