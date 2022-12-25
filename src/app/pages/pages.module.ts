import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeruPageComponent } from './peru-page/peru-page.component';
import { ChilePageComponent } from './chile-page/chile-page.component';
import { UruguayPageComponent } from './uruguay-page/uruguay-page.component';

@NgModule({
  declarations: [PeruPageComponent, ChilePageComponent, UruguayPageComponent],
  imports: [CommonModule],
  exports: [PeruPageComponent, ChilePageComponent, UruguayPageComponent],
})
export class PagesModule {}
