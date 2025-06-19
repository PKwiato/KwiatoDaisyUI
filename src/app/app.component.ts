import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./core/layout/footer/footer.component";
import { HeaderComponent } from './core/layout/header/header.component';
import { NavibarComponent } from './core/layout/navibar/navibar/navibar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, NavibarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'KwiatoWebPage';
}
