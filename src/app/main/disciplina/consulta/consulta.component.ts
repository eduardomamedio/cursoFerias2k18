import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DisciplinaService } from '../disciplina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  displayedColumns = [
    'descricao', 
    'instrutores', 
    'dataInicio', 
    'dataTermino', 
    'segmento', 
    'id'];
  dataSource = null;

  constructor(
    private _disciplinaService: DisciplinaService,
    private _router: Router) {  }

  ngOnInit() {
    this.obterLista();
  }

  public editar(id){
    this._router.navigate(['/main/usuario/editar', id]);
  }

  private obterLista(){
    this._disciplinaService.listar().subscribe(suc=>{
      this.dataSource = new MatTableDataSource<any>(suc);
    });
  }

  public excluir(id){
    this._disciplinaService.excluir(id).subscribe(suc=>{this.obterLista()});
  }

}