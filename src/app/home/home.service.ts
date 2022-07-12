import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
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

  getObjectsByDepartment(departmentIds: string){
    departmentIds = '3';
    let queryParams = new HttpParams().set("departmentIds", departmentIds);
    return this.http.get(environment.API_URL + "objects", {params: queryParams});
  }
}
