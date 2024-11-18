import { Routes } from '@angular/router';
import { HomeComponent } from '@/app/pages/home/home.component';
import { ConditionalComponent } from '@/app/pages/conditional/conditional.component';
import { TodoListComponent } from '@/app/pages/todo-list/todo-list.component';
import { PropsComponent } from './pages/props/props.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'conditional',
    title: 'Conditional Rendering',
    component: ConditionalComponent,
  },
  {
    path: 'todo-list',
    title: 'Todo List',
    component: TodoListComponent,
  },
  {
    path: 'props',
    title: 'Props',
    component: PropsComponent,
  },
];
