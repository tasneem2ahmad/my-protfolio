import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { educationList } from '../portfolio.data';

@Component({
  selector: 'app-portfolio-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html'
})
export class EducationComponent {
  readonly educationList = educationList;
}
