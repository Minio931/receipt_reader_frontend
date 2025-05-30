import { ROUTES_CONFIG } from '../../../configs/routes.config';
import { NavigationItem } from '../_types/navigation-item.type';

export const NAVIGATION_CONFIG: NavigationItem[] = [
  {
    label: '_Navigation.Entere Receipt',
    icon: 'tablerUpload',
    route: [ROUTES_CONFIG.Home],
  },
  {
    label: '_Navigation.Details',
    icon: 'tablerReportMoney',
    route: [ROUTES_CONFIG.ReceiptDetails],
  },
  {
    label: '_Navigation.Assign People',
    icon: 'tablerUsers',
    route: [ROUTES_CONFIG.AssignPepople],
  },
  {
    label: '_Navigation.Summary',
    icon: 'tablerCalculator',
    route: [ROUTES_CONFIG.Sumamry],
  },
];
