export interface IMenuItem {
  id: number;
  title: string;
  path: string;
}

export const menuItems = [
  {
    id: 1,
    title: 'Home',
    path: '/',
  },
  {
    id: 2,
    title: 'Conditional',
    path: '/conditional',
  },
  {
    id: 3,
    title: 'Todo List',
    path: '/todo-list',
  },
  {
    id: 4,
    title: 'Props',
    path: '/props',
  },
  {
    id: 5,
    title: 'Events',
    path: '/events',
  },
  {
    id: 6,
    title: 'Injection',
    path: '/injection',
  },
  {
    id: 7,
    title: 'Forms',
    path: '/forms',
  },
  {
    id: 8,
    title: 'Defer',
    path: '/defer',
  },
  {
    id: 9,
    title: 'Pipes',
    path: '/pipes',
  },
];
