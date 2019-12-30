import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-poste',
  templateUrl: './poste.component.html',
  styleUrls: ['./poste.component.scss']
})
export class PosteComponent implements OnInit {
  @Input() name: string;
  @Input() description: string ;
  @Input() status: string ;
  constructor() { }

  ngOnInit() {
  }

  getColor() {
    if(this.status === '1') {
      return 'green';
    } else if(this.status === '0') {
      return 'red';
    } else{
      return 'white';
    }
  }

}
