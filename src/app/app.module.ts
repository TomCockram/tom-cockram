import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SkillsComponent } from './skills/skills.component';
import { WritingComponent } from './writing/writing.component';
import { FooterComponent } from './footer/footer.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./nav-bar/nav-bar-routing.module').then(
        (m) => m.NavBarRoutingModule
      ),
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    WritingComponent,
    ContactComponent,
    FooterComponent,
    ComingSoonComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
