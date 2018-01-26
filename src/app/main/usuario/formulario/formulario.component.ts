import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { EqualsPasswordValidator } from '../../../validators/equalsPassword.validator';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  perfis=[
    {id: "PROFESSOR", descricao:"Professor"},
    {id: "ADMINISTRADOR", descricao:"Administrador"},
    {id: "ALUNO", descricao:"Aluno"},
  ]

  form : FormGroup;
  
  constructor(private _formBuilder: FormBuilder) { 
   this.form = this._formBuilder.group({
     id : '',
     nome : ['', Validators.required],
     email : ['', Validators.compose([Validators.required, Validators.email])],
     login : ['', Validators.required],
     perfil : ['', Validators.required],
     senha : ['', Validators.required],
     confirmacao : ['', Validators.required]
   },
   {validator: EqualsPasswordValidator.validate("senha", "confirmacao")}) 
  }

  ngOnInit() {
  }

}
