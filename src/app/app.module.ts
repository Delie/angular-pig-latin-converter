import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modules
import { SharedModule } from './_shared/shared.module';

// Components
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ConverterComponent } from './converter/converter.component';
import { ConverterHistoryComponent } from './converter-history/converter-history.component';

export const ROUTES: Routes = [
  { path: '', component: ConverterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'history', component: ConverterHistoryComponent },
  { path: '*', component: ConverterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ConverterComponent,
    ConverterHistoryComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    FormsModule,
		ReactiveFormsModule,
    RouterModule.forRoot(ROUTES, { useHash: false })
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
