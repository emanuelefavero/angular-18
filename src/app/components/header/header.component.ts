import { DropdownMenuComponent } from '@/app/components/dropdown-menu/dropdown-menu.component';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { menuItems } from '@/app/data/menuItems';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage, DropdownMenuComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() companyName = ''; // props

  menuItems = menuItems;
}
