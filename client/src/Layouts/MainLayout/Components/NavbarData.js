import { Contacts, Cottage, Info, School } from '@mui/icons-material';

export const NavbarData = [
  {
    id: 1,
    title: 'Home',
    path: '/',
    icon: <Cottage />,
  },
  {
    id: 2,
    title: 'Degree Validation',
    path: '/degree-validation',
    icon: <School />,
  },
  {
    id: 3,
    title: 'About Us',
    path: '/about',
    icon: <Info />,
  },
  {
    id: 4,
    title: 'Contact Us',
    path: '/contact',
    icon: <Contacts />,
  },
];
