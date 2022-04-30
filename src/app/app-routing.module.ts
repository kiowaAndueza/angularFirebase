import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongComponent } from './song/song.component';
import { DescriptionComponent } from './description/description.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home',pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'list', component:SongComponent},
  {path:'description', component:DescriptionComponent},
  {path:'description/:key',component:DescriptionComponent},
  {path:'new', component:FormComponent},
  {path:'update/:id', component:FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents =[SongComponent,
                                HomeComponent,
                                FormComponent,
                                DescriptionComponent]
