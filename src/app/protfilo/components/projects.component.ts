import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Project, projects } from '../portfolio.data';

@Component({
  selector: 'app-portfolio-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  readonly projects = projects;
  readonly categories = ['All', 'Full Stack', 'AI'];
  searchQuery = '';
  selectedCategory = 'All';

  get filteredProjects(): Project[] {
    const query = this.searchQuery.trim().toLowerCase();
    return this.projects.filter(project =>
      (this.selectedCategory === 'All' || project.category === this.selectedCategory) &&
      `${project.name} ${project.category}`.toLowerCase().includes(query)
    );
  }
}
