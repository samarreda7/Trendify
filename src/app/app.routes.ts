import { Routes } from '@angular/router';
import { Service } from './service/service';
import { Products } from './products/products';
import { Trendify } from './trendify/trendify';
import { ContactUs } from './contact-us/contact-us';
import { Notfound } from './notfound/notfound';

export const routes: Routes = [
  { path: '', redirectTo: 'trendify', pathMatch: 'full' },
  { path: 'trendify', component: Trendify },
  { path: 'service', component: Service },
  { path: 'products', component: Products },
  { path: 'contactus', component: ContactUs },
  { path: '**', component: Notfound },
];
