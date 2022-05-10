import {
  Dashboard,
  Badge,
  AssignmentInd,
  Apartment,
  School,
  Contacts,
  Feedback,
  HistoryEdu,
  CloudDownload,
  BarChart,
  Send,
  Preview,
} from '@mui/icons-material';

export const adminData = [
  {
    id: 1,
    title: 'Dashboard',
    path: '/app/dashboard',
    icon: <Dashboard />,
  },
  {
    id: 2,
    title: 'Manage Student',
    path: '/app/manage-student',
    icon: <Badge />,
  },
  {
    id: 3,
    title: 'Manage User',
    path: '/app/manage-user',
    icon: <AssignmentInd />,
  },
  {
    id: 4,
    title: 'Manage Department',
    path: '/app/manage-department',
    icon: <Apartment />,
  },
  {
    id: 5,
    title: 'Degree Applications',
    path: '/app/degree-applications',
    icon: <School />,
  },
  {
    id: 6,
    title: 'View Contacts',
    path: '/app/view-contact',
    icon: <Contacts />,
  },
  {
    id: 7,
    title: 'View Feedbacks',
    path: '/app/view-feedback',
    icon: <Feedback />,
  },
];

export const studentData = [
  {
    id: 1,
    title: 'Dashboard',
    path: '/app/dashboard',
    icon: <Dashboard />,
  },
  {
    id: 2,
    title: 'Apply Application',
    path: '/app/apply-application',
    icon: <HistoryEdu />,
  },
  {
    id: 3,
    title: 'Download Fee Chalan',
    path: '/app/download-chalan',
    icon: <CloudDownload />,
  },
  {
    id: 4,
    title: 'View Status',
    path: '/app/view-status',
    icon: <BarChart />,
  },
  {
    id: 5,
    title: 'Send Feedback',
    path: '/app/send-feedback',
    icon: <Send />,
  },
];

export const userData = [
  {
    id: 1,
    title: 'Dashboard',
    path: '/app/dashboard',
    icon: <Dashboard />,
  },
  {
    id: 2,
    title: 'Applications',
    path: '/app/applications',
    icon: <Preview />,
  },
];
