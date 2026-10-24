import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { stats } from '../portfolio.data';

@Component({
  selector: 'app-portfolio-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  readonly stats = stats;
}
