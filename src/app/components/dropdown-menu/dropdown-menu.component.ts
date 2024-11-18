import { HamburgerSVGComponent } from '@/app/components/icons/hamburger.component';
import { Component, HostListener, ElementRef, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { IMenuItem } from '@/app/data/menuItems';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [RouterLink, HamburgerSVGComponent],
  templateUrl: './dropdown-menu.component.html',
})
export class DropdownMenuComponent {
  @Input() menuItems: IMenuItem[] = []; // Props

  isOpen = false;

  constructor(private el: ElementRef) {}

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  // Listen for clicks anywhere in the document
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    // Check if the click target is outside the component's element
    if (this.isOpen && !this.el.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}
