import { Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ProductsShowingComponent } from "./products-showing/products-showing.component";

export const userRoutes:Routes =[
    {
        path:'',component:HomePageComponent,
        
    },
    {
        path:'aboutus',component:AboutUsComponent
    },
    {
        path:'products',component:ProductsShowingComponent
    }
]