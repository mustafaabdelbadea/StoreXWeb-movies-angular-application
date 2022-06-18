import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimengModule } from 'src/app/primeng.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, PrimengModule]
})
export class UserRoutingModule { }
