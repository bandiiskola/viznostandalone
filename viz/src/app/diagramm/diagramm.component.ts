import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-diagramm',
  templateUrl: './diagramm.component.html',
  styleUrl: './diagramm.component.css'
})
export class DiagrammComponent {
  constructor(private apiService: ApiService){}
  adatok:any[] = [];
  ngOnInit(): void {
    const url=`https://berenandor.moriczcloud.hu/viz/diagram`;
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
}
