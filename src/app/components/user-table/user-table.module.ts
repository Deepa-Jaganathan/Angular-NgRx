import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserTableComponent } from "./user-table.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { RouterModule, Routes } from "@angular/router";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";

const routes: Routes = [
  {
    path: "user",
    component: UserTableComponent,
  },
];

@NgModule({
  declarations: [UserTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  exports: [UserTableComponent],
})
export class UserTableModule {}
