import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicialComponent } from './components/inicial/inicial.component';
import { InicialService } from './services';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import { QuemSomosService } from './services/quem-somos.service';
import { ContatoComponent } from './components/contato/contato.component';




@NgModule({
  declarations: [InicialComponent, QuemSomosComponent, ContatoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    InicialComponent,
    QuemSomosComponent,
    ContatoComponent
  ],
  providers: [
    InicialService,
    QuemSomosService
  ]
})
export class PaginasModule { }
