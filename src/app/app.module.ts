import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Front/header/header.component';
import { FooterComponent } from './Front/footer/footer.component';
import { AboutComponent } from './Front/about/about.component';
import { ClientComponent } from './Front/client/client.component';
import { FeaturesComponent } from './Front/features/features.component';
import { ServicesComponent } from './Front/services/services.component';
import { CtaComponent } from './Front/cta/cta.component';
import { PortfolioComponent } from './Front/portfolio/portfolio.component';
import { CountsComponent } from './Front/counts/counts.component';
import { TestimonialsComponent } from './Front/testimonials/testimonials.component';
import { ContactComponent } from './Front/contact/contact.component';
import { TeamComponent } from './Front/team/team.component';
import { HomeComponent } from './Back/home/home.component';
import { HeroComponent } from './Front/hero/hero.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent ,
    ClientComponent ,
    FeaturesComponent ,
    ServicesComponent ,
    CtaComponent ,
    HomeComponent,
    TeamComponent,
    PortfolioComponent,
    CountsComponent,
    TestimonialsComponent ,
    ContactComponent,
    FooterComponent ,
    AboutComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
