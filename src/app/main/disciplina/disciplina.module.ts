import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisciplinaRouting } from './disciplina.routing';
import { FormBuilder } from '@angular/forms';
import { DisciplinaService } from './disciplina.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule, MatTooltipModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatButtonModule, MatIconModule, MatDatepickerModule, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material';
import { FormularioComponent } from './formulario/formulario.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ConsultaComponent } from './consulta/consulta.component';
import { InstrutorService } from './instrutor.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DisciplinaRouting,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatTableModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,    
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [ConsultaComponent, FormularioComponent],
  providers: [FormBuilder,
              DisciplinaService,
              InstrutorService, 
              HttpClient, 
              {provide: MAT_DATE_LOCALE, useValue: 'pt-br'}
              ]
})
export class DisciplinaModule { }
