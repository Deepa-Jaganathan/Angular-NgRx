import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ComponentsRoutingModule } from "./components-routing.module";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from './login/login.component';
import { ComponentsMaterialModule } from "./components-material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [HomeComponent, ContactComponent, AboutComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, ComponentsRoutingModule, ComponentsMaterialModule, FormsModule,
    ReactiveFormsModule, MatCardModule],
})
export class ComponentsModule {}
