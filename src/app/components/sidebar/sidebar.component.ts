import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  sidebarToggled = false;

  // Chiudi sidebar quando cambia la dimensione dello schermo
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (event.target.innerWidth > 1024 && !this.sidebarToggled) {
      // Opzionale: mantieni la sidebar aperta su desktop
    } else if (event.target.innerWidth <= 768) {
      // Chiudi automaticamente su mobile dopo il ridimensionamento
      this.sidebarToggled = false;
    }
  }

  toggleSidebar(): void {
    this.sidebarToggled = !this.sidebarToggled;
  }

  scrollTo(event: Event, sectionId: string): void {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Chiudi sidebar automaticamente dopo il click (utile su mobile)
    this.sidebarToggled = false;
  }
}
