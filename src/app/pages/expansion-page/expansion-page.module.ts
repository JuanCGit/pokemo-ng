import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ExpansionPageComponent } from "./expansion-page.component";
import { ExpansionPageRoutingModule } from "./expansion-page.routing.module";

@NgModule({
  declarations: [ExpansionPageComponent],
  imports: [
    ExpansionPageRoutingModule,
    CommonModule,
  ],
  exports: [ExpansionPageComponent],
})
export class ExpanionPageModule { }
