import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRouting } from './usuario.routing';
import { FormBuilder } from '@angular/forms';
import { UsuarioService } from './usuario.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule, MatTooltipModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatButtonModule, MatIconModule } from '@angular/material';
import { FormularioComponent } from './formulario/formulario.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ConsultaComponent } from './consulta/consulta.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UsuarioRouting,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule
  ],
  declarations: [ConsultaComponent, FormularioComponent],
  providers: [FormBuilder, UsuarioService, HttpClient]
})
export class UsuarioModule { }
