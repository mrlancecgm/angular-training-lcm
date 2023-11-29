import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { CoreCommonModule } from '@core/common.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    NgbModule,
    CoreCommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
