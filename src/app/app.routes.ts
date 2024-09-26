import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: "Home",
    },
    {
        path: "portfolio",
        component: PortfolioComponent,
        title: "Portfolio"
    },
    {
        path: '**', // Redirects any unknown path to Home
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })], // Use Hash Location Strategy
    exports: [RouterModule]
})
export class AppRoutingModule { }


