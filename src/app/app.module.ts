import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CartoonCharacterComponent } from './cartoon-character/cartoon-character.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    CharacterDetailComponent,
    CartoonCharacterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'characters',
        component: CartoonCharacterComponent
        
      },
      {
       path: 'dashboard',
      component: DashboardComponent
      }
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }