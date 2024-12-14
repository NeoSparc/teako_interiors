import { Routes } from "@angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { DashbordComponent } from "./dashbord/dashbord.component";
import { UserDataComponent } from "./user-data/user-data.component";
import { BannerComponent } from "./banner/banner.component";
import { AllProductsComponent } from "./all-products/all-products.component";
import { OffersComponent } from "./offers/offers.component";

export const AdminRoutes:Routes = [
    {path:'landpage',component:LandingPageComponent,
        children:[
            {path:'dashbord',component:DashbordComponent},
            {path:'userData',component:UserDataComponent},
            {path:'banner',component:BannerComponent},
            {path:'allproducts',component:AllProductsComponent},
            {path:'offers',component:OffersComponent}
        ]
    }
]