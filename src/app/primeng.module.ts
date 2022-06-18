import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';

const primeNgModules = [
  CardModule,
  InputTextModule,
  ButtonModule
]


@NgModule({
  imports: [primeNgModules],
  exports: [primeNgModules],
})


export class PrimengModule { }
