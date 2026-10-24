import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { profile } from '../portfolio.data';

@Component({
  selector: 'app-portfolio-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  readonly profile = profile;
  contactForm = { email: '', message: '' };

  submitContact(): void {
    const subject = encodeURIComponent('Portfolio enquiry');
    const body = encodeURIComponent(`${this.contactForm.message}\n\nReply to: ${this.contactForm.email}`);
    window.location.href = `mailto:${this.profile.email}?subject=${subject}&body=${body}`;
  }
}
