import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { UserDataComponent } from './user-data/user-data.component';
import { BannerComponent } from './banner/banner.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { OffersComponent } from './offers/offers.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddofferComponent } from './addoffer/addoffer.component';
import { AddbannerComponent } from './addbanner/addbanner.component';
import { SingleViewComponent } from './single-view/single-view.component';
import { EditProductComponent } from './edit-product/edit-product.component';

export const AdminRoutes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      { path: 'dashbord', component: DashbordComponent },
      { path: 'userData', component: UserDataComponent },
      { path: 'banner', component: BannerComponent },
      { path: 'allproducts', component: AllProductsComponent },
      { path: 'offers', component: OffersComponent },
      { path: 'addproduct', component: AddproductComponent },
      { path: 'addoffer', component: AddofferComponent },
      { path: 'addbanner', component: AddbannerComponent },
      { path: 'singleView/:id', component: SingleViewComponent },
      {path:'editProduct/:id',component:EditProductComponent}
    ],
  },
];
