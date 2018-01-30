import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { EqualsPasswordValidator } from '../../../validators/equalsPassword.validator';
import { ActivatedRoute } from '@angular/router';
import { DisciplinaService } from '../disciplina.service';
import { Router } from '@angular/router';
import { InstrutorService } from '../instrutor.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  segmentos=[
    {id: "BACKEND", descricao:"Backend"},
    {id: "FRONTEND", descricao:"Frontend"},
    {id: "MOBILE", descricao:"Mobile"},
  ]

  form : FormGroup;
  id =null;
  instrutores = [];
  
  constructor(
              private _formBuilder: FormBuilder,
              private _activatedRoute: ActivatedRoute,
              private _disciplinaService: DisciplinaService,
              private _instrutorService: InstrutorService,
              private _router: Router
            ) { 
              this.form = this._formBuilder.group({
                id : [null],
                descricao : [null, Validators.required],
                instrutores : this._formBuilder.array([]),
                dataInicio : [null, Validators.required],
                dataTermino : [null, Validators.required],
                segmento : [null, Validators.required],
                urlLogo : [null]
              }) 
  }

  ngOnInit() {

    this._instrutorService.instrutores().subscribe(suc=>{
      this.instrutores = suc;
    })

    this._activatedRoute.params.subscribe(params=>{
      this.id = params.id;
      if(this.id){
        this._disciplinaService.carregar(this.id).subscribe(retorno=>{
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
          this._disciplinaService.editar(this.form.value).subscribe(suc=>{
          this.form.reset();
          this._router.navigate(['/main/usuario/consulta']);
          });
        }else{
          this._disciplinaService.adicionar(this.form.value).subscribe(suc=>{
          this.form.reset();
          this._router.navigate(['/main/usuario/consulta']);
        });
      }
    }
  }
}
