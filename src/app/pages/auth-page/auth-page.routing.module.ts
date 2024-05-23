import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthPageComponent } from "./auth-page.component";

const routes: Routes = [
  {
    path: "login",
    data: { newUser: false },
    component: AuthPageComponent,
  },
  { path: "register", data: { newUser: true }, component: AuthPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
