import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExpansionPageComponent } from "./expansion-page.component";

const routes: Routes = [
  {
    path: "",
    component: ExpansionPageComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpansionPageRoutingModule {}
