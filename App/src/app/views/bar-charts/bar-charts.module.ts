import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BarChartsComponent } from './bar-charts.component';
import { barChartsRoutes } from './bar-charts.routes';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(barChartsRoutes),
    SharedModule,
  ],
  declarations: [BarChartsComponent]
})
export class BarChartsModule {
}
