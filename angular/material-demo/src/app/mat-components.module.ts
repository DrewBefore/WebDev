import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule, MatIconModule, MatButtonModule } from '@angular/material';
import { MatProgressSpinnerModule, MatTooltipModule, MatTabsModule } from '@angular/material';
import { MatCheckboxModule, MatNativeDateModule } from '@angular/material';
import {MatRadioModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {MatInputModule} from '@angular/material';

@NgModule({
  exports: [
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatTabsModule,
    MatButtonModule
  ]
})
export class MatComponentsModule { }
