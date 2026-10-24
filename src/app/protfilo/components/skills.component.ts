import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { skillGroups } from '../portfolio.data';

@Component({
  selector: 'app-portfolio-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
  readonly skillGroups = skillGroups;
}
