import { Component, OnInit } from '@angular/core';
import {ContatoService} from '../../services';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(private contato: ContatoService) { }

  ngOnInit() {
  }

}
