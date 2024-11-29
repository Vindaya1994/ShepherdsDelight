import { ViewportScroller, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ShepherdsDelights';
  contentLoaded = false;  // Flag to control content loading

  constructor(private viewportScroller: ViewportScroller) {}

  // Method to load content when button is clicked
  loadContent(): void {
    this.contentLoaded = true;
  }

  // Scroll to the specified section
  scrollToSection(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }
}
