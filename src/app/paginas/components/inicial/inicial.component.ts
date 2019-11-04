import { Component, OnInit } from '@angular/core';
import {InicialService} from '../../services';


@Component({
  selector: 'inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent implements OnInit {

  constructor(private inicial: InicialService) { }

  ngOnInit() {
  }

}
