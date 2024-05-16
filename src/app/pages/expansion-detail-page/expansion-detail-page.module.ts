import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ExpansionDetailPageComponent } from "./expansion-detail-page.component";
import { ExpansionDetailPageRoutingModule } from "./expansion-detail-page.routing.module";
import { BannerModule } from "../../components/banner/banner.module";

@NgModule({
  declarations: [ExpansionDetailPageComponent],
  imports: [ExpansionDetailPageRoutingModule, CommonModule, BannerModule],
  exports: [ExpansionDetailPageComponent],
})
export class ExpansionDetailPageModule {}