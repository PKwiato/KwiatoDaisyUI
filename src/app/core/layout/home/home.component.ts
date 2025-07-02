import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isScrollIconVisible = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 50) {
      this.isScrollIconVisible = false;
    } else {
      this.isScrollIconVisible = true;
    }
  }
}
