import { Injectable, Inject } from '@angular/core';
import { PeopleResponse } from './models/peopleResponse';
import { Character } from './models/character';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RetrieveDataService {
  constructor(
    private http: HttpClient,
    @Inject('SOURCE_URL') private sourceUrl
  ) { }

  public getCharacters(): Observable<Character[]> {
      return this.http.get<PeopleResponse>(this.sourceUrl).map(
        response => response.results
      );
  }
}
