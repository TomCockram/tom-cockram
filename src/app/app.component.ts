import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tom-cockram';
  constructor(private router: Router) {}

  scrollToElement(element: string): void {
    this.router.navigateByUrl(`/#${element}`);
  }
}
