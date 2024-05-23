import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BannerComponent } from "./banner.component";
import { ButtonModule } from "../button/button.module";
import { ProgressBarModule } from "../progress-bar/progress-bar.module";

@NgModule({
  declarations: [BannerComponent],
  imports: [CommonModule, ButtonModule, ProgressBarModule],
  exports: [BannerComponent],
})
export class BannerModule {}
