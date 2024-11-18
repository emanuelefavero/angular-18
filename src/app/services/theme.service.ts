import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeColor = new BehaviorSubject<string>(this.getInitialColor());
  themeColor$ = this.themeColor.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      // Listen for changes in the system color scheme only in the browser
      const darkModeMediaQuery = window.matchMedia(
        '(prefers-color-scheme: dark)'
      );
      darkModeMediaQuery.addEventListener('change', (event) => {
        this.updateThemeColor(event.matches);
      });
    }
  }

  private getInitialColor(): string {
    if (isPlatformBrowser(this.platformId)) {
      // NOTE: This theme.service only works in the browser. If you set your app as SSR, you need to handle the theme color in a different way (e.g., using TailwindCSS)
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? '#f5f5f4'
        : '#151210';
    }
    return '#151210'; // Fallback for SSR
  }

  private updateThemeColor(isDarkMode: boolean) {
    const color = isDarkMode ? '#f5f5f4' : '#151210';
    this.themeColor.next(color);
  }
}
