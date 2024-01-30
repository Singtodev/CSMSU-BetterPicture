import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { RankComponent } from './pages/rank/rank.component';
import { TermsComponent } from './pages/terms/terms.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: "",
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "rank",
        component: RankComponent
    },
    {
        path: "terms",
        component: TermsComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "register",
        component: RegisterComponent
    },
    {
        path: "**",
        component: NotfoundComponent
    }
];
