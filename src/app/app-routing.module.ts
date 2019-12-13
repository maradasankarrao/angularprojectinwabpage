import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheakoutComponent } from './pages/cheakout/cheakout.component';
import { ProductsComponent } from './pages/products/products.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"cart",component:CartComponent},
  {path:"dheakout",component:CheakoutComponent},
  {path:"home",component:HomeComponent},
  {path:"products",component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
