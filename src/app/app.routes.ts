import { Routes } from '@angular/router';
import { HomeComponent } from '@/app/pages/home/home.component';
import { ConditionalComponent } from '@/app/pages/conditional/conditional.component';
import { TodoListComponent } from '@/app/pages/todo-list/todo-list.component';
import { PropsComponent } from '@/app/pages/props/props.component';
import { EventsComponent } from '@/app/pages/events/events.component';
import { InjectionComponent } from '@/app/pages/injection/injection.component';
import { FormsComponent } from '@/app/pages/forms/forms.component';
import { DeferComponent } from '@/app/pages/defer/defer.component';

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
  {
    path: 'events',
    title: 'Events',
    component: EventsComponent,
  },
  {
    path: 'injection',
    title: 'Injection',
    component: InjectionComponent,
  },
  {
    path: 'forms',
    title: 'Forms',
    component: FormsComponent,
  },
  {
    path: 'defer',
    title: 'Defer',
    component: DeferComponent,
  },
];
