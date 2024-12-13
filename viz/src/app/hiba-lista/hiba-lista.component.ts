import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hiba-lista',
  templateUrl: './hiba-lista.component.html',
  styleUrl: './hiba-lista.component.css'
})
export class HibaListaComponent implements OnInit{
  constructor(private apiService: ApiService, private route: ActivatedRoute){}
  adatok:any[] =[];

  ngOnInit(): void {
    const url=`https://berenandor.moriczcloud.hu/viz`;
    console.log(url);
    this.apiService.apiHivas(url).subscribe(
      response =>{
        console.log('Api válasz: ',response);
        this.adatok = response
      },
      error =>{
        console.error('Hiba az API hívás során:')
      }
    )
  }
  torol(id: string){
    const url=`https://berenandor.moriczcloud.hu/viz/torol/${id}`;
    console.log(url);
    this.apiService.apiHivas(url).subscribe(
      response =>{
        console.log('Api válasz: ',response);
        this.adatok = response
        location.reload();
      },
      error =>{
        console.error('Hiba az API hívás során:')
      }
    )
  }
}
