import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonToggleModule} from '@angular/material/button-toggle';








@NgModule({
  imports: [
    MatButtonModule, MatToolbarModule, MatExpansionModule,MatProgressBarModule,MatCardModule,MatIconModule,MatSlideToggleModule,MatButtonToggleModule
  ],
  exports: [MatButtonModule, MatToolbarModule, MatExpansionModule,MatProgressBarModule,MatCardModule,MatIconModule,MatSlideToggleModule,MatButtonToggleModule],
  declarations: []
})
export class MaterialModule { }
