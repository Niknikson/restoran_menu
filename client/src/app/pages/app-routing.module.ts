import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page/admin-page.component';
import { ClientPageComponent } from './client-page/client-page.component';
import { DishesComponent } from '../components/dishes/dishes.component';
import { DishesWithoutCategoryComponent } from './common/dishes-without-category/dishes-without-category.component';

const routes: Routes = [
  {
    path: 'menu', component: ClientPageComponent,
    children: [
      { path: '', redirectTo: 'top_dishes', pathMatch: 'full',},
      {path: ':id', component: DishesComponent}
    ]
  },
  {
    path: 'admin', component: AdminPageComponent,
    children: [
      { path: '', redirectTo: 'top_dishes', pathMatch: 'full',},
      { path: ':id', component: DishesComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
