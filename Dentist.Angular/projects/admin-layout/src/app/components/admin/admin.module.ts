import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminRoutingModule } from "./admin-routing.module";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { AdminDashboardComponent } from "./components/admin-dashboard/admin-dashboard.component";
import { HomeComponent } from "./components/home/home.component";
import { MaterialModule } from "../../material/material.module";
import { DentistServicesComponent } from "./components/dentist-services/dentist-services.component";

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    AdminDashboardComponent,
    HomeComponent,
    DentistServicesComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, MaterialModule],
})
export class AdminModule {}
