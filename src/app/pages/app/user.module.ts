import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { PrimengModule } from 'src/app/primeng.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule,
    PrimengModule
  ]
})
export class UserModule { }
