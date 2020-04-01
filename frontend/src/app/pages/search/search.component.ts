import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { Techonology } from 'src/app/models/techonology.models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  technologies : Techonology[] = [];
  query : string;
  constructor( private _activatedRoute: ActivatedRoute,
               private _httpService : HttpService) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this.query = params['query'];
      this._httpService
        .searchTechnology(this.query)
        .subscribe((technologies : Techonology[])=> {
          this.technologies = technologies["data"];
        })
    
    })
  }

}
