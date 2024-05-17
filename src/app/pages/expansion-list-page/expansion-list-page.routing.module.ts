import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExpansionListPageComponent } from "./expansion-list-page.component";

const routes: Routes = [
  {
    path: "",
    component: ExpansionListPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpansionListPageRoutingModule {}