import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { MyComponentOneComponent } from './my-component-one/my-component-one.component';
import { SwitchCasesComponent } from './switch-cases/switch-cases.component';
import { LoopsLoopsComponent } from './loops-loops/loops-loops.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { MatSliderModule } from '@angular/material/slider';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const routerApp : Routes = [
  {path: '', component: MyComponentOneComponent},
  {path: 'switch-case', component: SwitchCasesComponent},
  {path: 'loops', component: LoopsLoopsComponent},
  {path: 'form', component: FormComponent},
  {path: 'reactive-f', component: ReactiveFormComponent}
]

const config: SocketIoConfig = { url: 'http://localhost:8988', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    MyComponentOneComponent,
    SwitchCasesComponent,
    LoopsLoopsComponent,
    HeaderComponent,
    FormComponent,
    FooterComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbAlertModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routerApp),
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
