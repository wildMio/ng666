import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';

const routes: Routes = [
  {
    path: '',
    component: IntroComponent
  },
  {
    path: 'member',
    loadChildren: './member/member.module#MemberModule'
  },
  {
    path: 'project',
    loadChildren: './project/project.module#ProjectModule'
  },
  {
    path: 'log',
    loadChildren: './log/log.module#LogModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
