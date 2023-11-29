import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { TranslateModule } from '@ngx-translate/core';
import { CoreCommonModule } from '@core/common.module';
import { AuthGuard } from 'app/common/guards/auth.guard';

const routes: Routes = [
  {
    path: 'error',
    loadChildren: () => import('./error/error.module').then(m => m.ErrorModule)
  },
  {
    path: 'customers',
    canActivate: [AuthGuard],
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: 'meters',
    canActivate: [AuthGuard],
    loadChildren: () => import('./meters/meters.module').then(m => m.MetersModule)
  },
  {
    path: 'accounts',
    canActivate: [AuthGuard],
    loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    ContentHeaderModule,
    TranslateModule,
    CoreCommonModule,
  ],
  providers: []
})
export class MainModule { }
