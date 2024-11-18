import { Component } from '@angular/core';
import { BackButtonComponent } from '@/app/components/shared/back-button.component';
import { PostsComponent } from '@/app/components/posts/posts.component';

@Component({
  standalone: true,
  imports: [BackButtonComponent, PostsComponent],
  template: `
    <h1>Defer (Loading and Placeholder)</h1>
    <!-- Load the posts component later and add a placeholder and a loading skeleton -->
    @defer {
    <app-posts />
    } @placeholder {
    <div class="flex flex-col gap-3">
      <div class="h-[32px] bg-stone-200 dark:bg-stone-800 animate-pulse"></div>
      <div class="h-[16px] bg-stone-200 dark:bg-stone-800 animate-pulse"></div>
      <div class="h-[16px] bg-stone-200 dark:bg-stone-800 animate-pulse"></div>
      <div class="h-[16px] bg-stone-200 dark:bg-stone-800 animate-pulse"></div>
    </div>
    } @loading (minimum 1s) {
    <div class="flex flex-col gap-3">
      <div class="h-[32px] bg-stone-200 dark:bg-stone-800 animate-pulse"></div>
      <div class="h-[16px] bg-stone-200 dark:bg-stone-800 animate-pulse"></div>
      <div class="h-[16px] bg-stone-200 dark:bg-stone-800 animate-pulse"></div>
      <div class="h-[16px] bg-stone-200 dark:bg-stone-800 animate-pulse"></div>
    </div>
    }

    <app-back-button />
  `,
})
export class DeferComponent {}
