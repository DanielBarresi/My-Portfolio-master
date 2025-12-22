import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  // Queste variabili DEVONO esistere per l'HTML
  viewportClass: string = 'is-desktop';
  showCard2: boolean = true;
  showCard3: boolean = true;

  ngOnInit() {
    this.updateLayout();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateLayout();
  }

  private updateLayout() {
    const w = window.innerWidth;
    if (w < 768) {
      this.viewportClass = 'is-mobile';
      this.showCard2 = false;
      this.showCard3 = false;
    } else if (w < 1025) {
      this.viewportClass = 'is-tablet';
      this.showCard2 = true;
      this.showCard3 = false;
    } else {
      this.viewportClass = 'is-desktop';
      this.showCard2 = true;
      this.showCard3 = true;
    }
  }
}