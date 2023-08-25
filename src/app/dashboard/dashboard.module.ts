import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardLayoutComponent } from '../layouts/dashboard-layout/dashboard-layout.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ServicesComponent } from './components/services/services.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardLayoutComponent,
    ContactsComponent,
    ServicesComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    PaginationModule.forRoot(),
  ],
  exports:[DashboardLayoutComponent]
})
export class DashboardModule { }
