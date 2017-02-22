import { ArtistComponent } from './artist/artist.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';


const appRoutes: Routes = [
    {path:'', component: SearchComponent }, 
    {path:'about', component: AboutComponent }, 
    {path:'artist/:id', component: ArtistComponent }, 
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);