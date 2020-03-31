import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Techonology } from 'src/app/models/techonology.models';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
  public technologies : Techonology[];
  constructor(public _httpService: HttpService) { }

  ngOnInit(): void {
    this._httpService
      .getTechnologies()
      .subscribe((technologies: Techonology[]) =>{ 
          this.technologies = technologies["data"];
      });
  }

}
