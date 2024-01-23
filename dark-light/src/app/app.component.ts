import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dark-light';

  darkmode = false;

  modetoggle() {
this.darkmode = !this.darkmode
document.documentElement.setAttribute('data-theme', this.darkmode ? "dark" : "light");
 }

}
