import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: LoginComponent,
    children: [
      { path: 'App', loadChildren: './app.component#AppComponent'}
    ]
  }

];

export const routing = RouterModule.forRoot(routes, { enableTracing: true })

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
