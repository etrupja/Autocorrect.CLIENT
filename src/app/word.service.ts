import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  baseUrl: string = 'https://localhost:44387/api/SpecialWords/'

  constructor(private http: HttpClient) { }

  getWord(id){
    return this.http.get(this.baseUrl+'/'+id);
  }

  getAll(){
     ('getAll() executed!');
     (this.baseUrl);

    return this.http.get(this.baseUrl);
  }

  createWord(word){
    return this.http.post(this.baseUrl, word);
  }

  updateWord(id, word){
    return this.http.put(this.baseUrl+'/'+id,word);
  }

  deleteWord(id){
    return this.http.delete(this.baseUrl+'/'+id);
  }
}
