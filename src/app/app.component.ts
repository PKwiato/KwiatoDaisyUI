import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./core/layout/footer/footer.component";
import { HomeComponent } from './core/layout/home/home.component';
import { NavibarComponent } from './core/layout/navibar/navibar.component';
import { ExperienceComponent } from './core/layout/experience/experience.component';
import { AboutmeComponent } from "./core/layout/aboutme/aboutme.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HomeComponent, NavibarComponent, ExperienceComponent, AboutmeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'KwiatoWebPage';
}
