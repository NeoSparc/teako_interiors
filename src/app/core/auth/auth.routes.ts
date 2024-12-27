import { Routes } from "@angular/router";
import { LoginComponent } from "./admin/components/login/login.component";
import { OtpComponent } from "./admin/components/otp/otp.component";
import { NewPasswordComponent } from "./admin/components/new-password/new-password.component";

export const AuthRouter:Routes = [
    {path:'',component:LoginComponent},
    {path:'otp',component:OtpComponent},
    {path:'newpass',component:NewPasswordComponent}
]