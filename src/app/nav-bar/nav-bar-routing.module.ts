import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar.component';
import { HomeComponent } from '../home/home.component';
import { SkillsComponent } from '../skills/skills.component';
import { WritingComponent } from '../writing/writing.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';

const routes: Routes = [
  { path: '', component: NavBarComponent },
  { path: '#about', component: AboutComponent },
  { path: '#contact', component: ContactComponent },
  { path: '#home', component: HomeComponent },
  { path: '#skills', component: SkillsComponent },
  { path: '#writing', component: WritingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavBarRoutingModule {}
