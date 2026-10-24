import { isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, Inject, OnDestroy, OnInit, Output, PLATFORM_ID } from '@angular/core';
import { profile } from '../portfolio.data';

@Component({
  selector: 'app-portfolio-hero',
  standalone: true,
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit, OnDestroy {
  @Output() navigate = new EventEmitter<string>();
  readonly profile = profile;
  readonly typingRoles = ['Full Stack .NET & Angular Developer', 'ERP Software Developer', 'ASP.NET Core Developer'];
  displayedRole = '';

  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typingTimer?: ReturnType<typeof setTimeout>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.displayedRole = this.typingRoles[0];
    } else {
      this.handleTyping();
    }
  }

  ngOnDestroy(): void {
    if (this.typingTimer) clearTimeout(this.typingTimer);
  }

  private handleTyping(): void {
    const current = this.typingRoles[this.roleIndex];
    if (this.isDeleting) {
      this.displayedRole = current.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.displayedRole = current.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let delay = this.isDeleting ? 60 : 120;
    if (!this.isDeleting && this.charIndex === current.length) {
      delay = 1800;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.typingRoles.length;
      delay = 400;
    }
    this.typingTimer = setTimeout(() => this.handleTyping(), delay);
  }
}
