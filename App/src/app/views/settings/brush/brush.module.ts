import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrushComponent} from './brush.component';
import {SharedModule} from '../../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [BrushComponent],
  exports: [BrushComponent]
})
export class BrushModule { }
