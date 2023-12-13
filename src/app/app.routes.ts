import { Routes } from '@angular/router';
import { HomeComponent } from './componenti/home/home.component';
import { ContactComponent } from './componenti/contact/contact.component';
import { ContattoComponent } from './componenti/contatto/contatto.component';
import { NotfoundComponent } from './componenti/notfound/notfound.component';

export const routes: Routes = [
    {path:'', pathMatch:"full", redirectTo: "/homepage"},
    {path:'homepage', component: HomeComponent},
    {path:'contact', component: ContactComponent, children: [
        {path:':id', component: ContattoComponent},
    ]},
    {path: "404", component: NotfoundComponent},
    {path: "**", redirectTo:"/404"},
];
