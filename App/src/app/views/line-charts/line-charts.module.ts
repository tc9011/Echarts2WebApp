import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LineChartsComponent } from './line-charts.component';
import { lineChartsRoutes } from './line-charts.routes';
import { SharedModule } from '../../shared/shared.module';
import { SettingsModule } from '../settings/settings.module';
import { LayoutModule } from '../../layout/layout.module';

@NgModule({
  imports: [
    LayoutModule,
    RouterModule.forChild(lineChartsRoutes),
    SharedModule,
    SettingsModule
  ],
  declarations: [LineChartsComponent]
})
export class LineChartsModule {
}
