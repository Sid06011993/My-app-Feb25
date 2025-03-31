import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicledetails',
  templateUrl: './vehicledetails.component.html',
  styleUrls: ['./vehicledetails.component.css']
})
export class VehicledetailsComponent {
id:number=0;
vehicle:any='';
constructor(private _activatedRoute:ActivatedRoute,
private _vehicleService:VehicleService){
  _activatedRoute.params.subscribe(
    (data:any)=>{
      console.log(data.id);
      this.id=data.id;
      console.log(this.id);
    },(err:any)=>{
      alert("Internal Server Error");
    }
  )
_vehicleService.getVehicle(this.id).subscribe(
  (data:any)=>{
    console.log(data);
    this.vehicle=data;
  }, (err:any)=>{
    alert("Internal Server Error");
  }
)
}
}
