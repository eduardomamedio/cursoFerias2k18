import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { MainRouting } from './main.routing';
import { MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule, MatCardModule, MatButtonModule, MatTableModule, MatTooltipModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule} from '@angular/material';
import { FormularioComponent } from './usuario/formulario/formulario.component';
import { ConsultaComponent } from './usuario/consulta/consulta.component';
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
    MatTableModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    FlexLayoutModule
  ],
  declarations: [MainComponent, ConsultaComponent, FormularioComponent]
})
export class MainModule { }
