import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Destination } from 'src/app/models/destination';
import { DestinationService } from 'src/app/services/destination.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-single-destination',
  templateUrl: './single-destination.component.html',
  styleUrls: ['./single-destination.component.css']
})
export class SingleDestinationComponent implements OnInit{

  public destination: Destination
  public roles: string
  public editDestinationForm: FormGroup

  constructor(private _destinationService: DestinationService, private _activatedRoute: ActivatedRoute, private _storageService: StorageService, private _toastr: ToastrService) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params =>{
      let id =+ params['id']
      this.getDestination(id)
    })
    this.roles = this._storageService.getUser().roles
    this.initForm()
  }

  private getDestination(id: number){
    this._destinationService.singleDestination(id).subscribe((data)=>
      this.destination = data
    )
  }

  private initForm(){
    this.editDestinationForm = new FormGroup({
      destinationName: new FormControl(''),
      destinationImage: new FormControl('')
    })
  }

  public edit(id: number){

    let destinationName = this.editDestinationForm.get('destinationName')?.value
    let destinationImage = this.editDestinationForm.get('destinationImage')?.value

    if(destinationName === ''){
      destinationName = this.destination.destination
    }
    if(destinationImage === ''){
      destinationImage = this.destination.image
    }

    if(this._destinationService.editDestination(id, destinationName, destinationImage).subscribe((data) =>{
      this.destination = data
    })){
      this._toastr.success("Successfully updated destination")
    }else{
      this._toastr.error("Error editing destination")
    }
  }
}
