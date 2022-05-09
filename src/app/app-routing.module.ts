import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNameComponent } from './feature/add-name/add-name.component';
import { HomeComponent } from './feature/home/home.component';
import { NamesViewComponent } from './feature/names-view/names-view.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
  path: 'home',
  component: HomeComponent
},{
  path:'add',
  component: AddNameComponent
},{
  path:'view',
  component: NamesViewComponent
},{
  path:'*',
  component: HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
