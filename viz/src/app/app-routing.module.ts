import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooldalComponent } from './fooldal/fooldal.component';
import { AppComponent } from './app.component';
import { HibaFelvitelComponent } from './hiba-felvitel/hiba-felvitel.component';
import { HibaListaComponent } from './hiba-lista/hiba-lista.component';

const routes: Routes = [
  {path:'feltolt', component:HibaFelvitelComponent},
  {path:'modosit/:id', component:HibaFelvitelComponent},
  {path: "", component: FooldalComponent},
  {path:'lista', component:HibaListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
