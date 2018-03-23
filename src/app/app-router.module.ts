import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from "./components/main/main.component";

const routes: Routes = [
    { path: '', pathMatch: 'full', component: MainComponent }
    //{ path: '**', component: PageNotFoundComponent }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class RoutingModule {}
  
  export const RoutingComponent = [MainComponent];