import { Injectable, Inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { APP_CONFIG, AppConfig } from "../app.config";

@Injectable({
  providedIn: 'root'
})
export class WordService {

  baseUrl: string 

  constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) { 
    this.baseUrl= config.apiEndpoint + '/SpecialWords'

  }

  getWord(wrongWord){
    console.log('getWord, wrongWord = ', wrongWord);
    return this.http.get(this.baseUrl+'/'+wrongWord);
  }

  getAll(){
    return this.http.get(this.baseUrl+'/getallwords');
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
