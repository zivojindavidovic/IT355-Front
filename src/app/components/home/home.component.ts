import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Destination } from 'src/app/models/destination';
import { DestinationService } from 'src/app/services/destination.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public destinations: Destination[]
  content: string
  roles: string
  constructor(private _storageService: StorageService, private _destinationService: DestinationService, private _route: Router){}

  ngOnInit(): void {
    this.roles = this._storageService.getUser().roles
    this._destinationService.getDestinations().subscribe((data:Destination[]) =>
      this.destinations = data
    )
  }

  public deleteDestination(id: number){
    this._destinationService.deleteDestination(id).subscribe((data)=>{
      this._removeFromList(id);
    })
  }

  private _removeFromList(id: number){
    let ind = this.destinations.findIndex(destination => destination.id = id)
    this.destinations.splice(ind, 1)
  }

}