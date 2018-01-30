import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { HttpParams } from '@angular/common/http/src/params';

@Injectable()
export class InstrutorService {

  private _url = environment.url + 'api/v1/usuarios';

  constructor(private _httpClient:HttpClient) { }
    instrutores(){
      let httpParams = new HttpParams().set("tipo", "PROFESSOR");
      return this._httpClient.get<Array<any>>(this._url, { params : httpParams});
    }
}
