import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { experiences } from '../portfolio.data';

@Component({
  selector: 'app-portfolio-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  readonly experiences = experiences;
}
