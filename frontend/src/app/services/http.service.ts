import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Techonology } from '../models/techonology.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  private baseUrl: string = environment.BASE_API_URL;
  
  constructor(private readonly _http: HttpClient) {}
  
  public getTechnologies(){
    return this._http.get<Techonology[]>(this.baseUrl+"/technologies");
  }
  
  public getTechnology( id : string) {
    return this._http.get<Techonology>(this.baseUrl + "/technology" + id);
  }

  public searchTechnology( query : string){
    return this._http.get<Techonology>(this.baseUrl + "/technology/search/" + query);
  }
}
 