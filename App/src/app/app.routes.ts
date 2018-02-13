import {AppComponent} from "./app.component";

export const appRoutes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',    // lazy load
  },
  {
    path: 'line',
    loadChildren: './line-charts/line-charts.module#LineChartsModule',    // lazy load
  },
  {
    path: 'bar',
    loadChildren: './bar-charts/bar-charts.module#BarChartsModule',    // lazy load
  }
];
