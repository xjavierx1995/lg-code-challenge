import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Filter } from '../core/classes/filter';
@Injectable({
  providedIn: 'root'
})
export class HomeService{

  constructor(
    public http: HttpClient
  ) {}

  getObjects(){
    return this.http.get(environment.API_URL + "objects");
  }

  getObjectById(objectId: number){ 
    return this.http.get(environment.API_URL + `objects/${objectId}`);
  }

  getObjectsByDepartment(departmentIds: string){
    departmentIds = '3';
    let queryParams = new HttpParams().set("departmentIds", departmentIds);
    return this.http.get(environment.API_URL + "objects", {params: queryParams});
  }

  getDepartments(){
    return this.http.get(environment.API_URL + "departments");
  }

  /**
   * We're creating a new HttpParams object, and then looping through the keys in the params object,
   * and if the value is not null or an empty string, we're adding it to the HttpParams object
   * @param {Filter} params - Filter
   * @returns An observable of the response from the API.
   */
  doSearch(params: Filter){
    let queryParams = new HttpParams();

    for (const key in params) {
      if (params[key] != '' && params[key] != null) {
        queryParams = queryParams.set(key, params[key])  
      }
    }
    
    return this.http.get(environment.API_URL + "search", {params: queryParams});
  }
}
