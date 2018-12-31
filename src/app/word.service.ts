import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  baseUrl: string = 'https://localhost:44387/api/SpecialWords/'

  constructor(private http: HttpClient) { }

  getWord(wrongWord){
    console.log('getWord, wrongWord = ', wrongWord);
    return this.http.get(this.baseUrl+'/'+wrongWord);
  }

  getAll(){
    return this.http.get(this.baseUrl);
  }

  createWord(word){
    return this.http.post(this.baseUrl, word);
  }

  updateWord(wrongWord, word){
    return this.http.put(this.baseUrl+'/'+wrongWord,word);
  }

  deleteWord(wrongWord){
    return this.http.delete(this.baseUrl+'/'+wrongWord);
  }
}
