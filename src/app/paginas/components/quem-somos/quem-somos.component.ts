import { Component, OnInit } from '@angular/core';
import { QuemSomosService } from '../../services';

@Component({
  selector: 'quem-somos',
  templateUrl: './quem-somos.component.html',
  styleUrls: ['./quem-somos.component.css']
})
export class QuemSomosComponent implements OnInit {

  constructor(private quemsomos: QuemSomosService) { }

  ngOnInit() {
  }

}
