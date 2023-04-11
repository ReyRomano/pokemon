import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
//import { Pokemon } from '../../interfaces/pokemon-response';
import { Ability } from 'src/app/interfaces/pokemon-response';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit, AfterViewInit {

  @Input() abilitys: Ability[] | undefined;

  constructor() {}
  ngAfterViewInit(): void {
    //throw new Error('Method not implemented.');
    
  }

  ngOnInit(): void {

    console.log(this.abilitys);
    
  }

  onSlideNext() {}

}
