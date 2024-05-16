import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./pages/home-page/home-page.module").then(
        (m) => m.HomePageModule,
      ),
  },
  {
    path: "expansion/:id",
    loadChildren: () =>
      import("./pages/expansion-detail-page/expansion-detail-page.module").then(
        (m) => m.ExpansionDetailPageModule,
      ),
  },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}