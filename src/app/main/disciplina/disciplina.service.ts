import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DisciplinaService {

  private _urlDisciplina = environment.url + "/api/v1/disciplinas";

  constructor(
    private _httpClient : HttpClient
  ) { }

  carregar(id){
    return this._httpClient.get<any>(this._urlDisciplina+"/"+id);
  }

  listar(){
    return this._httpClient.get<Array<any>>(this._urlDisciplina);
  }

  editar(disciplina){
    return this._httpClient.put(this._urlDisciplina+"/"+disciplina.id, disciplina, {responseType: 'text'})
  }

  excluir(id){
    return this._httpClient.delete(this._urlDisciplina+"/"+id, {responseType: 'text'});
  }

  adicionar(disciplina){
    return this._httpClient.post(this._urlDisciplina, disciplina, {responseType: 'text'});
  }

}
