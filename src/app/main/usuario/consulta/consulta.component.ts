import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  displayedColumns = ['nome', 'login', 'email', 'perfil', 'id'];
  dataSource = null;

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router) {  }

  ngOnInit() {
    this.obterLista();
  }

  public editar(id){
    this._router.navigate(['/main/usuario/editar', id]);
  }

  private obterLista(){
    this._usuarioService.listar().subscribe(suc=>{
      this.dataSource = new MatTableDataSource<any>(suc);
    });
  }

  public excluir(id){
    this._usuarioService.excluir(id).subscribe(suc=>{this.obterLista()});
  }

}