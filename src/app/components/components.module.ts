import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ComponentsRoutingModule } from "./components-routing.module";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [HomeComponent, ContactComponent, AboutComponent, LoginComponent],
  imports: [CommonModule, ComponentsRoutingModule],
})
export class ComponentsModule {}
