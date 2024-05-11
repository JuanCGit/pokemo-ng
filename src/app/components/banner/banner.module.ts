import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BannerComponent } from "./banner.component";
import { ButtonModule } from "../button/button.module";

@NgModule({
  declarations: [BannerComponent],
  imports: [CommonModule, ButtonModule],
  exports: [BannerComponent],
})
export class BannerModule {}
