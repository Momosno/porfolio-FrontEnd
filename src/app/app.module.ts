import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { XpCardComponent } from './components/xp-card/xp-card.component';
import { CircularGraphsComponent } from './components/circular-graphs/circular-graphs.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProyectsComponent,
    XpCardComponent,
    CircularGraphsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
