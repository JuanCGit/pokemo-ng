import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ExpansionListPageComponent } from "./expansion-list-page.component";
import { ExpansionListPageRoutingModule } from "./expansion-list-page.routing.module";
import { ButtonModule } from "../../components/button/button.module";
import { ExpansionModule } from "../../components/expansion/expansion.module";

@NgModule({
  declarations: [ExpansionListPageComponent],
  imports: [
    ExpansionListPageRoutingModule,
    CommonModule,
    ButtonModule,
    ExpansionModule,
  ],
  exports: [ExpansionListPageComponent],
})
export class ExpansionListPageModule {}