import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Destination } from 'src/app/models/destination';
import { DestinationService } from 'src/app/services/destination.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{

  public destinations: Destination[]
  public createDestinationForm: FormGroup

  constructor (private _destinationService: DestinationService, private _toastrService: ToastrService) {}

  ngOnInit(): void {
    this.initForm()
  }

  submitForm(){
    let id = this.createDestinationForm.get('id')?.value
    let destinationName = this.createDestinationForm.get('destinationName')?.value
    let destinationImage = this.createDestinationForm.get('destinationImage')?.value
  
    let destination = new Destination(id, destinationName, destinationImage)
    this.createDestination(destination) ? this._toastrService.success("Destination successfully added") : this._toastrService.error("Error adding new destination")   
    this.createDestinationForm.reset()
  }

  public initForm(){
    this.createDestinationForm = new FormGroup({
      destinationName: new FormControl('', Validators.required),
      destinationImage: new FormControl('', Validators.required)
    })
  }

  public createDestination(destination: Destination):Boolean{
    if(this._destinationService.addDestination(destination).subscribe((data) =>{
      this.destinations.unshift(data)
    })){
      return true
    }
    return false
  }

}
