import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  constructor(private _http:HttpClient) { }
  apiUrl='http://localhost:3000/products';
  apiStud='http://localhost:3000/student';
  getAllData():Observable<any>
  {
    return this._http.get(`${this.apiUrl}`);
  }
  getAllDataStud():Observable<any>
  {
    return this._http.get(`${this.apiStud}`);
  }
  createData(data:any):Observable<any>
  {
    return this._http.post(`${this.apiUrl}`,data);

  }
  deleteData(id:any):Observable<any>{
    let ids=id;
    return this._http.delete(`${this.apiUrl}/${ids}`)
  }
  updateData(data:any,id:any):Observable<any>{
    let ids=id;
    return this._http.put(`${this.apiUrl}/${ids}`,data);
  }
  getSingleData(id:any):Observable<any>
  {
    let ids=id;
    return this._http.get(`${this.apiUrl}/${ids}`)
  }
}
