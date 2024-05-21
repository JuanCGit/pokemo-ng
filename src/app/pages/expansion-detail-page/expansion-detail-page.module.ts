import { CommonModule, NgOptimizedImage } from "@angular/common";
import { NgModule } from "@angular/core";
import { ExpansionDetailPageComponent } from "./expansion-detail-page.component";
import { ExpansionDetailPageRoutingModule } from "./expansion-detail-page.routing.module";
import { BannerModule } from "../../components/banner/banner.module";
import { OverlayImageModule } from "../../components/overlay-image/overlay-image.module";

@NgModule({
  declarations: [ExpansionDetailPageComponent],
  imports: [
    ExpansionDetailPageRoutingModule,
    CommonModule,
    BannerModule,
    OverlayImageModule,
    NgOptimizedImage,
  ],
  exports: [ExpansionDetailPageComponent],
})
export class ExpansionDetailPageModule {}