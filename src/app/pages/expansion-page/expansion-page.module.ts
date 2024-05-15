import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ExpansionPageComponent } from "./expansion-page.component";
import { ExpansionPageRoutingModule } from "./expansion-page.routing.module";
import { BannerModule } from "../../components/banner/banner.module";

@NgModule({
  declarations: [ExpansionPageComponent],
  imports: [ExpansionPageRoutingModule, CommonModule, BannerModule],
  exports: [ExpansionPageComponent],
})
export class ExpansionPageModule {}
