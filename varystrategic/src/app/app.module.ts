import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VarySpineComponent } from './components/vary-spine/vary-spine.component';
import { VaryAboutComponent } from './components/vary-about/vary-about.component';
import { VaryWorkComponent } from './components/vary-work/vary-work.component';
import { VaryContactComponent } from './components/vary-contact/vary-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    VarySpineComponent,
    VaryAboutComponent,
    VaryWorkComponent,
    VaryContactComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
