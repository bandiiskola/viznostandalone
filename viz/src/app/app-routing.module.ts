import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HibaFelvitelComponent } from './hiba-felvitel/hiba-felvitel.component';
import { HibaListaComponent } from './hiba-lista/hiba-lista.component';

const routes: Routes = [
  {path:'', component:HibaFelvitelComponent},
  {path:'modosit/:id', component:HibaFelvitelComponent},
  {path:'lista', component:HibaListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
