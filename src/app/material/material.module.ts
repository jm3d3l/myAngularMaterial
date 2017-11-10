import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
      MatButtonModule,
      MatToolbarModule,
      MatFormFieldModule,
      MatInputModule,
      MatChipsModule,
      MatCardModule,
      MatIconModule
      
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatCardModule,
    MatIconModule
  
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatCardModule,
    MatIconModule

  ],
  declarations: []
})
export class MaterialModule { }
