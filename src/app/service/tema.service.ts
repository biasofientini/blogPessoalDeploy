import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(
    private http: HttpClient
  ) {}

  createHeaders(){
    return {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://blogpessoalbeatriz.herokuapp.com/tema', this.createHeaders())
  }

  getByIdTema(id: number): Observable<Tema>{
    return this.http.get<Tema>(`https://blogpessoalbeatriz.herokuapp.com/tema/${id}`, this.createHeaders())
  }

  getByNome(nome: string): Observable<Tema[]>{
    return this.http.get<Tema[]>(`https://blogpessoalbeatriz.herokuapp.com/tema/${nome}`, this.createHeaders())
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('https://blogpessoalbeatriz.herokuapp.com/tema', tema, this.createHeaders())
  }

  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>('https://blogpessoalbeatriz.herokuapp.com/tema', tema,  this.createHeaders())
  }

  deleteTema(id: number){
    return this.http.delete(`https://blogpessoalbeatriz.herokuapp.com/tema/${id}`, this.createHeaders())
  }

}
