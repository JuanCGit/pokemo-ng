import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { OverlayImageComponent } from "./overlay-image.component";

@NgModule({
  declarations: [OverlayImageComponent],
  imports: [CommonModule],
  exports: [OverlayImageComponent],
})
export class OverlayImageModule {}