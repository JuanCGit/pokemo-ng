import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ExpansionsCarrouselComponent } from "./expansions-carrousel.component";
import { RouterLink } from "@angular/router";
import { ExpansionModule } from "../../../../components/expansion/expansion.module";

@NgModule({
  declarations: [ExpansionsCarrouselComponent],
  imports: [CommonModule, RouterLink, ExpansionModule],
  exports: [ExpansionsCarrouselComponent],
})
export class ExpansionsCarrouselModule {}
