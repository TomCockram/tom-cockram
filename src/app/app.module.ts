import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SkillsComponent } from './skills/skills.component';
import { WritingComponent } from './writing/writing.component';

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
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
