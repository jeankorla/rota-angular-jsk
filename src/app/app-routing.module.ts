import { Component, OnInit, NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RoutePaginas} from './paginas';


export const rotas = [
    {path: 'index', pathMatch: 'full', redirectTo: 'localhost:4200'},
    ...RoutePaginas
]

@NgModule({
    imports: [
        RouterModule.forRoot(rotas)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}