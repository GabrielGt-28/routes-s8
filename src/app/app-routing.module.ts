import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeruPageComponent } from './pages/peru-page/peru-page.component';
import { ChilePageComponent } from './pages/chile-page/chile-page.component';
import { UruguayPageComponent } from './pages/uruguay-page/uruguay-page.component';

const routes: Routes = [
  { path: 'peru-page', component: PeruPageComponent },
  { path: 'chile-page', component: ChilePageComponent },
  { path: 'uruguay-page', component: UruguayPageComponent },
  { path: '**', redirectTo: 'peru-page' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
