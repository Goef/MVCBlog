import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressBarModule} from '@angular/material/progress-bar';




@NgModule({
  imports: [
    MatButtonModule, MatToolbarModule, MatExpansionModule,MatProgressBarModule
  ],
  exports: [MatButtonModule, MatToolbarModule, MatExpansionModule,MatProgressBarModule],
  declarations: []
})
export class MaterialModule { }
