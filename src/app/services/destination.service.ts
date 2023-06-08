import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Destination } from '../models/destination';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  private baseUrl = "http://localhost:8080/api/destinations"

  constructor(private _httpClient: HttpClient) { }

  public singleDestination(id: number): Observable<Destination>{
    return this._httpClient.get<Destination>(this.baseUrl + '/' + id)
    .pipe(
      map((destination: Destination) => this._createDestinationFromObject(destination))
    )
  }

  public getDestinations(): Observable<Destination[]>{
    return this._httpClient.get<Destination[]>(this.baseUrl)
    .pipe(
      map((data: any[]) => data.map((destination: any) => this._createDestinationFromObject(destination)))
    )
  }

  public deleteDestination(id: number): Observable<Destination>{
    return this._httpClient.delete(this.baseUrl + '/' + id).pipe(
      map((destination: any) => this._createDestinationFromObject(destination))
    )
  }

  public addDestination(destination: Destination){
    return this._httpClient.post(this.baseUrl, destination)
    .pipe(
      map((destination: any) => this._createDestinationFromObject(destination))
    )
  }

  public editDestination(id: number, destination: string, image: string): Observable<Destination>{
    const body = {id: id, destination: destination, image: image}
    return this._httpClient.put<Destination>(this.baseUrl, body).pipe(
      map((destination: any) => this._createDestinationFromObject(destination))
    )
  }

  private _createDestinationFromObject(destination: any): any {
    return new Destination(destination.id, destination.destination, destination.image)
  }
}
