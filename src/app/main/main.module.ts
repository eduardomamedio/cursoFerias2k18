import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { MainRouting } from './main.routing';
import { MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule, MatCardModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule} from '@angular/flex-layout'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MainRouting,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  declarations: [MainComponent]  
})
export class MainModule { }
