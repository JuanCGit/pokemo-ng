import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthPageComponent } from "./auth-page.component";
import { AuthPageRoutingModule } from "./auth-page.routing.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AuthPageComponent],
  imports: [AuthPageRoutingModule, CommonModule, ReactiveFormsModule],
})
export class AuthPageModule {}
