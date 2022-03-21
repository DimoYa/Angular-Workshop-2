import { RouterModule, Routes } from "@angular/router";
import { ThemesListComponent } from './themes-list/themes-list.component';
import { ThemesNewComponent } from './themes-new/themes-new.component';


const routes: Routes = [
    { path: 'themes', component: ThemesListComponent},
    { path: 'themes/new', component: ThemesNewComponent},
];

export const ThemesRoutingModule = RouterModule.forChild(routes);