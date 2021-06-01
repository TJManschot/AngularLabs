import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routes } from './services/routes/app-routes';
import { HomePage } from './pages/home/home.page';
import { InvitePage } from './pages/invite/invite.page';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactNamePipe} from './pipes/contact-name.pipe';
import { EventFormComponent } from './components/invite-form/event-form.component';
import { InviteContactsFormComponent } from './components/invite-contacts-form/invite-contacts-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    InvitePage,
    ContactListComponent,
    ContactFormComponent,
    ContactNamePipe,
    EventFormComponent,
    InviteContactsFormComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
