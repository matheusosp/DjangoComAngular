import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MembersDetailComponent } from './members-detail/members-detail.component';
import { FormsModule } from '@angular/forms';
import { CreateMemberComponent } from './create-member/create-member.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersDetailComponent,
    CreateMemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
