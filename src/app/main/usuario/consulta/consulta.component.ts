import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  displayedColumns = ['nome', 'login', 'email', 'perfil', 'id'];
  dataSource = null;

  constructor(private _usuarioService: UsuarioService) { 
    this.dataSource = new MatTableDataSource<any>(
      this._usuarioService.listar()
    )
  }

  ngOnInit() {
  }

}

export interface Element {
  id: number;
  nome: string;
  login: string;
  email: string;
  perfil: string;
}

const ELEMENT_DATA: Element[] = [
  {id: 1, nome: 'Candido', login: 'candido', email: 'candido@ponto.com.br', perfil: 'SU'},
  {id: 2, nome: 'Abreu', login: 'abreu', email: 'abreu@ponto.com.br', perfil: 'SU'},
  {id: 3, nome: 'Mota', login: 'mota', email: 'mota@ponto.com.br', perfil: 'SU'}
];
