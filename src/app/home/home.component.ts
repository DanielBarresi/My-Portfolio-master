import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('portfolioText', { static: false }) portfolioTextRef!: ElementRef;
  sidebarToggled = false;

  contactForm: FormGroup;
  successMsg: string = '';
  errorMsg: string = '';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  sendEmail(): void {
    if (this.contactForm.invalid) {
      this.errorMsg = 'Compila tutti i campi correttamente.';
      this.successMsg = '';
      return;
    }
    // Qui puoi integrare un servizio email (es. EmailJS, backend API, ecc.)
    // Per ora mostriamo solo un messaggio di successo simulato
    this.successMsg = 'Messaggio inviato con successo!';
    this.errorMsg = '';
    this.contactForm.reset();
  }

  ngAfterViewInit(): void {
    // Animazione GSAP per il testo Portfolio
    if (this.portfolioTextRef) {
      gsap.from(this.portfolioTextRef.nativeElement, {
        duration: 1.5,
        y: -100,
        opacity: 0,
        rotation: -10,
        ease: 'bounce.out',
        delay: 0.5
      });
      gsap.to(this.portfolioTextRef.nativeElement, {
        duration: 2,
        scale: 1.1,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut'
      });
    }
  }

  toggleSidebar(): void {
    this.sidebarToggled = !this.sidebarToggled;
  }

  scrollTo(event: Event, section: string): void {
    event.preventDefault();
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Chiudi la sidebar dopo il click (per mobile)
      this.sidebarToggled = false;
    }
  }
}
