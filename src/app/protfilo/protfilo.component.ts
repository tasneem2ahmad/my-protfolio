import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { AboutComponent } from './components/about.component';
import { ContactComponent } from './components/contact.component';
import { EducationComponent } from './components/education.component';
import { ExperienceComponent } from './components/experience.component';
import { HeaderComponent } from './components/header.component';
import { HeroComponent } from './components/hero.component';
import { ProjectsComponent } from './components/projects.component';
import { SkillsComponent } from './components/skills.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    HeaderComponent, HeroComponent, AboutComponent, SkillsComponent,
    EducationComponent, ExperienceComponent, ProjectsComponent, ContactComponent
  ],
  templateUrl: './protfilo.component.html'
})
export class PortfolioComponent implements OnInit, OnDestroy {
  activeTab = 'hero';
  private sectionObserver?: IntersectionObserver;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.sectionObserver = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) this.activeTab = visible.target.id;
    }, { rootMargin: '-25% 0px -55% 0px', threshold: [0, 0.25, 0.5] });
    requestAnimationFrame(() => document.querySelectorAll('main section[id]')
      .forEach(section => this.sectionObserver?.observe(section)));
  }

  ngOnDestroy(): void {
    this.sectionObserver?.disconnect();
  }

  scrollToSection(sectionId: string): void {
    this.activeTab = sectionId;
    if (!isPlatformBrowser(this.platformId)) return;
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    });
  }

  scrollToTop(): void {
    this.activeTab = 'hero';
    if (!isPlatformBrowser(this.platformId)) return;
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    });
  }
}
