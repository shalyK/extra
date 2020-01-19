import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToevoegenComponent } from './toevoegen/toevoegen.component';
import { RouterModule, Routes } from '@angular/router';
import { LijstComponent } from './lijst/lijst.component';
import { ZoekenComponent } from './zoeken/zoeken.component';
import { VerwijderenComponent } from './verwijderen/verwijderen.component';
import { HttpClientModule }    from '@angular/common/http';
import { PersonenService } from './personen.service';


const appRoutes: Routes = [
  { path: 'toevoegen', component: ToevoegenComponent },
  { path: 'lijst', component: LijstComponent },
  { path: 'update/:name', component: ZoekenComponent },
  { path: 'verwijderen', component: VerwijderenComponent },
  { path: '**', redirectTo: '/' }

];


@NgModule({
  declarations: [
    AppComponent,
    ToevoegenComponent,
    LijstComponent,
    ZoekenComponent,
    VerwijderenComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,    
    FormsModule
  ],
  providers: [PersonenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
