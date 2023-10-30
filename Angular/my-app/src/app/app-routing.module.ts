import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ListCarComponent } from './list-car/list-car.component';
import { AddCarComponent } from './add-car/add-car.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'list-car',component:ListCarComponent},
  {path:'add-car',component:AddCarComponent},
  {path:'add-car/:id',component:AddCarComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule {
}