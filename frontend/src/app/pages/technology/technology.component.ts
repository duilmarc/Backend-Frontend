import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { Techonology } from 'src/app/models/techonology.models';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
   public technology : Techonology = {
     name : '',
     description: '',
     logo : '',
     _id   : '',
     tags : [],
     createdAt : null,
     updatedAt : null
   }
  constructor(
    private __activatedRoute: ActivatedRoute,
    private _httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.__activatedRoute.params.subscribe( params => {
      const id: string = params['id'];
      this._httpService.getTechnology(id)
        .subscribe((technology : Techonology) =>
        {
          console.log(technology["data"]);
          this.technology = technology["data"];
        });
    });
  }

}
