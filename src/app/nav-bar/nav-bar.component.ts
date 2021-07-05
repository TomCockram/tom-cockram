import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  // this method doesn't navigate you
  navigate(fragment: string) {
    this.router.navigateByUrl('#' + fragment);
    console.log('navigate');
  }
}
