import { Component, OnInit, NgModule } from '@angular/core';
import {Routes} from '@angular/router';
import {InicialComponent} from './components/inicial'
import { QuemSomosComponent } from './components/quem-somos';
import { ContatoComponent } from './components/contato';


export const RoutePaginas = [
    {path: 'inicial', component: InicialComponent},
    {path: 'quem-somos', component: QuemSomosComponent},
    {path: 'contato', component: ContatoComponent}

]
