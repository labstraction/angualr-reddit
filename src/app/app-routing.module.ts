import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './custom-components/list/list.component';
import { FavouritesComponent } from './custom-components/favourites/favourites.component';

const routes: Routes = [
  {path:'home', component: ListComponent},
  {path:'favourites', component: FavouritesComponent},
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  {path:'**', redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
