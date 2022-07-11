import { Component, OnInit } from '@angular/core';
import { PeliServiseService } from 'src/app/servise/peli-servise.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public pelis: any;

  constructor(private peliculas:PeliServiseService) {
   
    
   }

  async ngOnInit() {

    //this.pelis = await this.peliculas.getAll();
  }

}
