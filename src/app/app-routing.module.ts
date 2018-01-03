import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";


import { RegisterComponent } from "./nucleo/register/register.component";

import { LoginComponent } from "./nucleo/login/login.component";
import { AboutComponent } from "./nucleo/home/about.component";
import { AuthGuard } from "./common/auth-guard.service";


const rutas: Routes = [
    {path: "", component: AboutComponent, pathMatch: "full"},
    {path: 'reg', component: RegisterComponent},
    {path: "login", component: LoginComponent},
    {path: "user", loadChildren: "./user/user.module#UserModule",  canActivate:[AuthGuard]},
    {path: "expense", loadChildren: "./account/account.module#AccountModule", canActivate:[AuthGuard]},
    { path: "**", redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(rutas)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouting {}