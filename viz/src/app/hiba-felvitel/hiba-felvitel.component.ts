import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hiba-felvitel',
  templateUrl: './hiba-felvitel.component.html',
  styleUrl: './hiba-felvitel.component.css'
})
export class HibaFelvitelComponent implements OnInit{
  constructor(private apiService: ApiService, private route: ActivatedRoute){}
  id:string|null=null;
  adatok:any[] =[];
  currentid:any;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    if(this.id!=null)
    {
      const url=`https://berenandor.moriczcloud.hu/viz/lekerdez/${this.id}`;
      this.apiService.apiHivas(url).subscribe(
      response =>{
        console.log('Api válasz: ',response);
        this.adatok=Object.values(response);
        (document.getElementById('nev') as HTMLInputElement).value=this.adatok[1];
        (document.getElementById('cim') as HTMLInputElement).value=this.adatok[2];
        (document.getElementById('leiras') as HTMLInputElement).value=this.adatok[3];
      },
      error =>{
        console.error('Hiba az API hívás során:')
      }
    );
    }
  }

  callAPI(){
    let nev = (document.getElementById('nev') as HTMLInputElement).value;
    let cim = (document.getElementById('cim') as HTMLInputElement).value;
    let leiras = (document.getElementById('leiras') as HTMLSelectElement).value;
    if(this.id==null)
    {
      const url=`https://berenandor.moriczcloud.hu/viz/feltolt/${nev}/${cim}/${leiras}`;
    this.apiService.apiHivas(url).subscribe(
      response =>{
        console.log('Api válasz: ',response);
      },
      error =>{
        console.error('Hiba az API hívás során:')
      }
    )
    }
    else
    {
      const url=`https://berenandor.moriczcloud.hu/viz/modosit/${this.id}/${nev}/${cim}/${leiras}`;
    this.apiService.apiHivas(url).subscribe(
      response =>{
        console.log('Api válasz: ',response);
      },
      error =>{
        console.error('Hiba az API hívás során:')
      }
    )
    }
    
  }
}
