import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient.component';
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    PatientComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [
    PatientComponent
  ],
})
export class PatientModule { }
