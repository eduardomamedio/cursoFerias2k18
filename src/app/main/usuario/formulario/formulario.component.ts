import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { EqualsPasswordValidator } from '../../../validators/equalsPassword.validator';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

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
  id =null;
  
  constructor(
              private _formBuilder: FormBuilder,
              private _activatedRoute: ActivatedRoute,
              private _usuarioService: UsuarioService,
              private _router: Router
            ) { 
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
    this._activatedRoute.params.subscribe(params=>{
      this.id = params.id;
      if(this.id){
        this._usuarioService.carregar(this.id).subscribe(retorno=>{
          retorno.senha = null;
          retorno.confirmacao = null;
          delete retorno.urlFoto;
          this.form.get("senha").setValidators(null);
          this.form.get("confirmacao").setValidators(null);            
          this.form.setValue(retorno);
        })
      }
    })
  }

  public salvar(){
      if(this.form.valid){
        if(this.id){
          this._usuarioService.editar(this.form.value).subscribe(suc=>{
          this.form.reset();
          this._router.navigate(['/main/usuario/consulta']);
          });
        }else{
          this._usuarioService.adicionar(this.form.value).subscribe(suc=>{
          this.form.reset();
          this._router.navigate(['/main/usuario/consulta']);
        });
      }
    }
  }
}
