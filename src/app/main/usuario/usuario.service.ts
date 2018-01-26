import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService {

  private mock = [
    {id: 1, nome: 'Candido', login: 'candido', email: 'candido@ponto.com.br', perfil: 'SU'},
    {id: 2, nome: 'Abreu', login: 'abreu', email: 'abreu@ponto.com.br', perfil: 'SU'},
    {id: 3, nome: 'Mota', login: 'mota', email: 'mota@ponto.com.br', perfil: 'SU'}
  ];

  constructor() { }

  carregar(id){
    return this.mock.find(item=> item.id == id);
  }

  listar(){
    return this.mock;
  }

  editar(usuario){
    let index = this.mock.findIndex(item=> item.id == usuario.id)
    if(index > -1){
      this.mock[index] = usuario;
    }
  }

  excluir(id){
    let index = this.mock.findIndex(item=> item.id == id)
    if(index > -1){
      this.mock.slice(index, 1);
    }    
  }

  adicionar(usuario){
    let idInsert = 0;
    this.mock.forEach(item=> {
      idInsert = idInsert < item.id ? item.id : idInsert;
    })
    usuario.id = idInsert + 1;
    this.mock.push(usuario); 
  }

}
