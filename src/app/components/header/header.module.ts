import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatInputModule } from "@angular/material/input";
import { RouterModule } from "@angular/router";
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';

import { MatButtonModule } from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, MatToolbarModule, MatInputModule, MatListModule, MatMenuModule, MatButtonModule, MatIconModule, ],
  exports: [HeaderComponent],
})
export class HeaderModule {}

//routerLink in html will not work if RouterModule in imports array here
