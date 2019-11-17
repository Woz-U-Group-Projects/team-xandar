import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDisplayComponent } from './customer-display/customer-display.component';


const routes: Routes = [
  {
    path: 'add',
    component: CustomerDisplayComponent
  },
  {
    path: 'list',
    component: CustomerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
