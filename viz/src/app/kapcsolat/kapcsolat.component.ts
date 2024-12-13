import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-kapcsolat',
  templateUrl: './kapcsolat.component.html',
  styleUrl: './kapcsolat.component.css'
})
export class KapcsolatComponent {
  constructor(private apiService: ApiService){}
  callAPI(){
    let nev = (document.getElementById('name') as HTMLInputElement).value;
    let email = (document.getElementById('email') as HTMLInputElement).value;
    let message = (document.getElementById('message') as HTMLSelectElement).value;
    if(nev == "" || email == "" || message == "")
    {
      alert("Mindegyik mező kitöltése kötelező!")
    }
      const url=`https://berenandor.moriczcloud.hu/viz/email/${nev}/${email}/${message}`;
    this.apiService.apiHivas(url).subscribe(
      response =>{
        console.log('Api válasz: ',response);
        location.reload();
      },
      error =>{
        console.error('Hiba az API hívás során:')
      }
    )
    }
}
