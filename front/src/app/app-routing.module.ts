import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMemberComponent } from './create-member/create-member.component';
import { MembersDetailComponent } from './members-detail/members-detail.component';

const routes: Routes = [
  { path: 'member-detail/:id', component:MembersDetailComponent},
  { path: 'new-member', component:CreateMemberComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ MembersDetailComponent, ]