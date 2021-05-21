import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulter',
  templateUrl: './consulter.component.html',
  styleUrls: ['./consulter.component.css']
})
export class ConsulterComponent implements OnInit {

  reservations:any;
  statut:any;
  urlb ="  https://localhost:5001/api/reservations";
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getreservations();
    //this.DeleteReservation(this.reservations);
    this.UpdateStatutReservation(this.reservations,this.statut);
  }

  getreservations(){
    this.http.get('https://localhost:5001/api/reservations').subscribe(response =>{
      this.reservations=response;
      console.log(response)
    },error =>{
      console.log(error);
    })
  }

  // DeleteReservation(id:number){
  //   this.http.delete(`${this.urlb}/${id}`).subscribe(response =>{
  //     this.reservations=response;
  //     console.log(response),
      
  //      this.getreservations();

  //   },error =>{
  //     console.log(error);
  //   })
  // }

  UpdateStatutReservation(id:number, statut : string){
    var body = 
      [
        {
            "op": "replace",
            "path": "/statut",
            "value": statut
        }
    ]
    
    this.http.patch(`${this.urlb}/${id}`,body).subscribe(response =>{

      this.reservations=response;
      console.log(response),
      
       this.getreservations();

    },error =>{
      console.log(error);
    })
  }
  
  // getevennement(){
  //   this.http.get('https://localhost:5001/api/Evennements').subscribe(response =>{
  //     this.evennement=response;
  //     console.log(response)
  //   },error =>{
  //     console.log(error);
  //   })
  // }

  // getsalle(){
  //   this.http.get('https://localhost:5001/api/salles').subscribe(response =>{
  //     this.salle=response;
  //     console.log(response)
  //   },error =>{
  //     console.log(error);
  //   })
  // }
}
