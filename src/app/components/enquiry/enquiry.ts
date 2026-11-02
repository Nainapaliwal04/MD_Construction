
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-enquiry',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enquiry.html',
  styleUrl: './enquiry.css'
})
export class EnquiryComponent {
  isSubmitting = false;
  statusMessage = '';

  form = {
    name: '',
    phone: '',
    email: '',
    city: '',
    service: '',
    projectType: '',
    budget: '',
    startDate: '',
    message: '',
    preferredContact: 'Phone',
    website: ''
  };

  submitEnquiry(): void {
    if (this.isSubmitting) {
      return;
    }

    const name = this.form.name.trim();
    const phone = this.form.phone.trim();
    const email = this.form.email.trim();
    const message = this.form.message.trim();

    if (!name || !phone || !email || !this.form.service || !message) {
      this.statusMessage = 'Please complete all required fields.';
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      this.statusMessage = 'Please enter a valid email address.';
      return;
    }

    const digits = phone.replace(/\D/g, '');

    if (digits.length < 7 || digits.length > 15) {
      this.statusMessage = 'Please enter a valid phone number.';
      return;
    }

    // Backend connection will be added in the next step.
    this.statusMessage = 'Form validation successful. Backend connection is pending.';
  }
}
