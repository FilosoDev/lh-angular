import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuralVagasComponent } from './mural-vagas/mural-vagas.component';
import { PainelVagasComponent } from './painel-vagas/painel-vagas.component';

const routes: Routes = [
  { path: 'mural', component: MuralVagasComponent },
  { path: 'painel', component: PainelVagasComponent },
  { path: '', redirectTo: '/mural', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
