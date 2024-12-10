import { Routes } from '@angular/router';
import { LandingPageComponent } from './features/components/user/landing-page/landing-page.component';

export const routes: Routes = [
    {
        path:'',component:LandingPageComponent,loadChildren:()=> import('./features/components/user/user.routes').then((m)=>m.userRoutes)
    }
];
