import { Routes ,CanActivate} from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ServciesPageComponent } from './servcies-page/servcies-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { authGuard } from './auth.guard';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'index',
        pathMatch:'full'
    },
  {
        path:"index",
        component:HomePageComponent
    },  
      {
        path:"aboutUs",
        component:AboutUsComponent
    },  
    {
        path:"blogs",
        component:BlogsComponent
    },  
    {
        path:"contactUs",
        component:ContactUsComponent
    },  
    {
        path:"servcies",
        loadComponent:()=>import('./servcies-page/servcies-page.component').then((c)=>c.ServciesPageComponent)
    },
    {
        path:"servcies/:serviceId/:limit",
        component:ServciesPageComponent
    },
    {
        path:"old-servcies/:serviceId",
        redirectTo: (route)=>{
            return `/servcies/${route.params['serviceId']}`
        }
    },
    {
        path:"dashboard",
        component:DashboardComponent,
        children:[
            {
                path:'profile',
                component:ProfileComponent
            },
    
        ],
        canActivate:[authGuard]
    },
    {
        path:"**",
        component:NotFoundComponent
    }
];
