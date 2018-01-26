import { Component } from '@angular/core';
import { Character } from './models/character';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { RetrieveDataService } from './retrieve-data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Star Farce';
  characters: Observable<Character[]>;

  constructor(
    private retrieveDataService: RetrieveDataService
  ) {
  }

  ngOnInit() {
    this.characters = this.retrieveDataService.getCharacters();
  }
}
