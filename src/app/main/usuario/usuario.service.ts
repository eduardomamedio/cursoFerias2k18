import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsuarioService {

  private mock = [
    {id: 1, nome: 'Candido', login: 'candido', email: 'candido@ponto.com.br', perfil: 'ADMINISTRADOR'},
    {id: 2, nome: 'Abreu', login: 'abreu', email: 'abreu@ponto.com.br', perfil: 'PROFESSOR'},
    {id: 3, nome: 'Mota', login: 'mota', email: 'mota@ponto.com.br', perfil: 'ALUNO'}
  ];

  private _urlUsuario = environment.url + "/api/v1/usuarios";

  constructor(
    private _httpClient : HttpClient
  ) { }

  carregar(id){
    return this._httpClient.get<any>(this._urlUsuario+"/"+id);
  }

  listar(){
    return this._httpClient.get<Array<any>>(this._urlUsuario);
  }

  editar(usuario){
    return this._httpClient.put(this._urlUsuario+"/"+usuario.id, usuario, {responseType: 'text'})
  }

  excluir(id){
    return this._httpClient.delete(this._urlUsuario+"/"+id, {responseType: 'text'});
  }

  adicionar(usuario){
    return this._httpClient.post(this._urlUsuario, usuario, {responseType: 'text'});
  }

}
