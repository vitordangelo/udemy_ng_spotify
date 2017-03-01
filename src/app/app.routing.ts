import { ArtistComponent } from './artist/artist.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { AlbumComponent } from './album/album.component';


const appRoutes: Routes = [
    {path:'', component: SearchComponent }, 
    {path:'about', component: AboutComponent }, 
    {path:'album/:id', component: AlbumComponent }, 
    {path:'artist/:id', component: ArtistComponent }, 
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);