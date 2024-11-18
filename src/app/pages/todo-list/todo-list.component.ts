import { Component } from '@angular/core';
import { TodoSVGComponent } from '@/app/components/icons/todo.component';
import { NgClass } from '@angular/common';
import { BackButtonComponent } from '@/app/components/shared/back-button.component';

@Component({
  standalone: true,
  imports: [TodoSVGComponent, NgClass, BackButtonComponent],
  template: `<h1 class="text-primary-500 font-semibold text-3xl">Todo List</h1>

    <ul class="mt-4">
      @for (todo of todos; track todo.id) {
      <li
        [ngClass]="{
          'flex items-center gap-2 select-none cursor-pointer': true,
          'line-through text-gray-400': todo.completed
        }"
        (click)="toggleTodo(todo.id)"
      >
        {{ $index + 1 }} {{ todo.text }}

        @if (todo.completed) { <todo-svg /> }
      </li>
      }
    </ul>

    <app-back-button /> `,
})
export class TodoListComponent {
  todos = [
    { id: 1, text: 'Eat', completed: false },
    { id: 2, text: 'Work', completed: true },
    { id: 3, text: 'Sleep', completed: false },
  ];

  toggleTodo(id: number) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  }
}

// TIP: Use @for to loop through an array and track to set a unique identifier for each item (similar to React key)
